import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
import MovieDetails from "./MovieDetails";



const Movie = () => {

    const {search} =useLocation();
    const [movieDetail, setMovieDetail] = useState(null);
    const movie = queryString.parse(search);

    async function fetchMovieDetail(){

    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMBD_API;
    
        try{
            const response = await fetch(
                `http://omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${movie.title}`
                );
            
            const data = await response.json();
    
            setMovieDetail(data)
        }catch(e){

        }
    }


    useEffect(()=>{
       fetchMovieDetail();
    

    },[]);


    return (
        <div>
            <MovieDetails {...movieDetail}/>
        </div>
    )
}

export default Movie