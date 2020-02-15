import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Cool() {

    useEffect(() => {
        fetchMovies();
    }, []);

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch('https://www.omdbapi.com/?apikey=ea518254&s=cool');
        const movies = await data.json();
        console.log(movies.Search);
        setMovies(movies.Search);
    }

    return (
        <div className="movie-wrapper">
            <h1>Um here are some <span className="cool-movies">Cool</span> Movies:</h1>
            <div className="movies">

                {movies.map(movie => (
                    <Link key={movie.imdbID} to={`/cool/${movie.imdbID}`}>
                        <div className="movie">
                            <img src={movie.Poster} alt={movie.Title}/>
                            <h2>{movie.Title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Cool;
