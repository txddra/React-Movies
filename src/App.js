import {useState} from 'react'
import './App.css';
import Search from "./Search/Search";

function App() {
  
  const [searchValue, setSearchValue] = useState("");

  //passes the values down
//null in the beginning
  const  [movieResults, setMovieResults] = useState(null);

  async function fetchMovieListApi(inputValue){
    setSearchValue(inputValue);

    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMBD_API;

    try{
      const response = await fetch(`http://omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`)

      const data = await response.json();

      setMovieResults(data.Search)




    }catch(e){

    } 
  }
  return (
    <div className="App">

      <Search 
      searchValue={searchValue} 
      fetchMovieListApi ={fetchMovieListApi} 
      movieResults={movieResults}
      />

     
    </div>
  );
}

export default App;
