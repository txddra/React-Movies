import React from "react";

const SearchList =({movieResults}) =>{

    function showMovieList(){
        return movieResults.map((item, i)=>{
            return (
                <li key ={i}>
                    <img src ={item.Poster} alt ="some good movie"/>
                    {item.Title}
                </li>
            )
        })
    }
    return <ul><div>{showMovieList()}</div></ul>
};

export default SearchList;