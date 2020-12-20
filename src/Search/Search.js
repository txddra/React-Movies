import React from "react";
import  SearchList  from "./SearchList";


const Search = ({
    searchValue, 
    fetchMovieListApi,
    movieResults
})=>{
    return(
        <div>
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