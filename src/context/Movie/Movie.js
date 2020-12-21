import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import MovieDetails from "./MovieDetails";
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';


const Movie = () => {

    const {search} =useLocation();
    const [movieDetail, setMovieDetail] = useState(null);
    const title = queryString.parse(search);

    useEffect(()=>{

    },[])


    return (
        <div>
            <MovieDetails />
        </div>
    )
}

export default Movie