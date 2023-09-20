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


const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000"

function App() {
  //return a destructed array from the useState hook
 
  const [movies, setMovies] = useState();
  // console.log(movies)
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  // console.log(reviews)
 
  const getMovies = async () => {

    try{

          // this path is append to baseURL
          const response = await api.get(`${baseUrl}/api/v1/movies`);

          // console.log(response.data);

          setMovies(response.data);

    } catch(err)
    {
      console.log(err);
    }

  }

  const getMovieData = async (movieId) => {

    try{
      const response = await api.get(`${baseUrl}/api/v1/movies/${movieId}`);
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
