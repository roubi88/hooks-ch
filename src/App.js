import React, { useState } from 'react';
import './App.css';
import {moviesData} from './Component/MovieData/MovieData'
import MovieListe from './Component/MovieListe/MovieListe';

function App() {
  const [movies, setmovies] = useState(moviesData)
  return (
    <div className="App">
     <MovieListe movies={movies}/>
    </div>
  );
}

export default App;
