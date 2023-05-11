import React from 'react';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListe.css";

const MovieListe = ({movies}) => {
    return (
        <div className='moviesList'>
            {movies.map( (movie)=> (
            <MovieCard movie={movie} key={movie.id}/>))
        }
        </div>
    );
};

export default MovieListe;