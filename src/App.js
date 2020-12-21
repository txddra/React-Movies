import {useState} from 'react'
import './App.css';
import Search from "./Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Movie from "./context/Movie/Movie";


function AppNav() {
  
  
  
  const [searchValue, setSearchValue] = useState("");
  
  //passes the values down
  //null in the beginning
  const  [movieResults, setMovieResults] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  
  async function fetchMovieListApi(inputValue){
    setSearchValue(inputValue);

    if(!searchValue){
      setIsFetching(false);
      return;

    }
    
    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMBD_API;
    
    try{
      const response = await fetch(`http://omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`)
      
      const data = await response.json();

      if(!data.Error){
        setIsFetching(true);
        setMovieResults(data.Search);

      }
      
      // setMovieResults(data.Search|| [])
      
      
      
      
    }catch(e){
      
    } 
  }
  return (
    <div className="App">

      <Search 
      searchValue={searchValue} 
      fetchMovieListApi ={fetchMovieListApi} 
      movieResults={movieResults}
      isFetching ={isFetching}
      />

     
    </div>
  );
}
function App (){
  return(
<Router>
<Switch>  
      <Route exact path="/" component={AppNav}/>
      <Route exact path="/:movieTitle" component={Movie}/>
      <Route render={()=><h1>Not Found</h1>}/>
</Switch>

    </Router>


  )

}

export default App;
