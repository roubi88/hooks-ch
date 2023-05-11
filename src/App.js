import React, { useState } from 'react';
import './App.css';
import {moviesData} from './Component/MovieData/MovieData'
import MovieListe from './Component/MovieListe/MovieListe';
import AddMovie from './Component/AddMovie/AddMovie';

function App() {
  const [movies, setmovies] = useState(moviesData)

  const add=(newMovie)=>{
    setmovies([...movies, newMovie]);
  }
  return (
    <div className="App">
     
      <h2>CheckPoint Hooks : MovieApp</h2> 
      <AddMovie add={add}/>
     <MovieListe movies={movies}/>
    </div>
  );
}

export default App;
