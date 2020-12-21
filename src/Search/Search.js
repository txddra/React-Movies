import React from "react";
import  SearchList  from "./SearchList";
import "./Search.css";


const Search = ({
    searchValue, 
    fetchMovieListApi,
    movieResults
})=>{
    return(
        <div className="search">
        <input 
        value ={searchValue}
        onChange ={(e)=> fetchMovieListApi(e.target.value)}
        type ="text"
            />
{ searchValue !== "" && <SearchList movieResults ={movieResults}/>}
    </div>
    )


};

export default Search;