import React, { useState } from 'react';
import './App.css';
import {moviesData} from './Component/MovieData/MovieData'
import MovieListe from './Component/MovieListe/MovieListe';
import AddMovie from './Component/AddMovie/AddMovie';
import FilterMovieName from './Component/FilterMovieName/FilterMovieName';
import Rating from './Component/Rating/Rating';

function App() {
  const [movies, setmovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState('');
  const [rating, setRating] = useState(1)

  const add=(newMovie)=>{
    setmovies([...movies, newMovie]);
  }
  return (
    <div className="App">
     
      <h2>CheckPoint Hooks : MovieApp</h2> 
      <div className='filterRate'>
      <FilterMovieName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <Rating rating={rating} setRating={setRating} isMovieRating={false}/>
      </div>
      <AddMovie add={add}/>
    
      <MovieListe movies={movies} inputSearch={inputSearch} rating={rating}/>
     
    </div>
  );
}

export default App;
