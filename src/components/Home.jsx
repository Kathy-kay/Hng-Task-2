import Footer from "../components/Footer"
import MovieList from "../components/MovieList"
import Header from "./Header"
import { useTopMovies } from "./tmbd"
import imdb from "../assets/imdb.png"
import tomato from "../assets/tomato.png"
import Play from "../assets/Play.png"

 
const BASE_URL = "https://image.tmdb.org/t/p/w1280/";


const Home = () => {
  
  const {data: topMovies, isLoading, isError} = useTopMovies();
  

  const  getRandomMovie = () =>{
    if (!topMovies || topMovies.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * topMovies.length);
    return topMovies[randomIndex]
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error fetching data </h1>
  }


  const randomMovie = getRandomMovie();

  return (
    <>
      <section id="hero">
          <div className="hero-container">
            <img src={`${BASE_URL}${randomMovie.backdrop_path}`} alt="hero image"/>  
          </div>
          <div className="hero-text">
            <h1>{randomMovie.title}</h1>
            <div className="rating">
              <div className="icon">
               <img src={imdb} alt="imdb icon" />
                <span className="rate">86.0 / 100</span>
              </div>
              <div className="icon">
                <img src={tomato} alt="tomato-icon" />
                <span>97%</span>
              </div>
            </div>
            <p className="hero-description">{randomMovie.overview}</p>
              <button>
                <img src={Play} alt="play" />
                <p className="btn-text">WATCH TRAILER</p>
              </button>
          </div>
        <Header />
      </section>
      <MovieList />
      <Footer />
    </>
  )
}

export default Home
