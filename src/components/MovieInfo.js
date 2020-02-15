import React, {useEffect, useState} from 'react';
import '../App.css';

function MovieInfo({match}) {

    useEffect(() => {
        fetchMovie();
    }, []);

    const [movie, setMovie] = useState([]);

    const fetchMovie = async () => {
        const data = await fetch(`http://www.omdbapi.com/?apikey=ea518254&i=${match.params.id}`);
        const movie = await data.json();
        console.log(movie);
        setMovie(movie);
    }

    return (
        <div className="movie-wrapper">
            <div className="movie-desc">

                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title}/>
                <h2>Year: {movie.Year}</h2>
                <h2>Rating: {movie.Rated}</h2>
                <h3>Actors: {movie.Actors}</h3>
                <p>{movie.Plot}</p>
            </div>
        </div>
    );
}

export default MovieInfo;