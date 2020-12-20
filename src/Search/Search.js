import React from "react";

const Search = ({searchValue, fetchMovieListApi})=>{
    return(
        <div>
        <input 
        value ={searchValue}
        onChange ={(e)=> fetchMovieListApi(e.target.value)}
        type ="text"
            />

    </div>
    )


};

export default Search;