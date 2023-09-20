import './App.css';
import api from './api/axiosConfig';
//hooks
import {useState, useEffect} from 'react';

import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {
  //return a destructed array from the useState hook

  // 'movies' will store an array of movie data returned from a call to the relevant API endpoint 
  // and 'setMovies' is a function that can be used to change the state of the movies variable. 
  // When the state of the variable tracked by react through the useState hook is changed the component is re-rendered by react.
  // so in this case the app component will be re-rendered when the state of the 'movies' variable changes.  
  const [movies, setMovies] = useState();
  // console.log(movies)
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  // console.log(reviews)
  // async and await are used for thread management functionality on the client
  // this functionality can be effective in ensuring that the UI is not blocked. When pontentially long running operations, like
  // for example, a remote API call are processed, the UI thread will not be blocked, and therefore the user's screen will not be freezed
  // and screen will still be responsive, while a pontentially long running IO bound operation is processing. Once the relevant task is completed,
  // the code directly below the code that kicks off the awaited process will be executed.  
  const getMovies = async () => {

    try{
          // this path is append to baseURL
          const response = await api.get("http://localhost:5000/api/v1/movies");

          // console.log(response.data);

          setMovies(response.data);

    } catch(err)
    {
      console.log(err);
    }

  }

  const getMovieData = async (movieId) => {

    try{

      const response = await api.get(`http://localhost:5000/api/v1/movies/${movieId}`);
      // console.log(response.data);

      const singleMovie = response.data;
      
      console.log(singleMovie);
    
      setMovie(...singleMovie);

      // console.log(singleMovie[0].reviews)
      setReviews(singleMovie[0].reviews);
      

    }catch(error){
      console.log(error)
    }

  }

  // 'getMovies' function is executed when the app component first loads.
  useEffect(() => {
    getMovies();
  }, [])

  if(movies){
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home movies={movies}/>}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>

    </div>
  );
  }
}

export default App;
