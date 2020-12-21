import React from "react";
import { Link } from "react-router-dom";
import './Search.css';

const SearchList =({movieResults}) =>{

    function showMovieList(){
        return movieResults.map((item, i)=>{
            return (
                <li key ={i}>
                    <img src ={item.Poster} alt ="some good movie"/>
                    <Link to ={`${item.Title}`}>
                    {item.Title}
                    
                    </Link>
                </li>
            )
        })
    }
    return <ul className="results"><div>{showMovieList()}</div></ul>
};

export default SearchList;