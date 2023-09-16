import { useTopMovies } from "./tmbd"
import { Link } from "react-router-dom";

const MovieList = () => {
   
    const {data: topMovies} = useTopMovies();
   

  return (
    <section className="movie-container">
        <div className="movie-topic">
            <h2>Featured Movie</h2>
            <p>See more</p>
        </div>
        <div className="movie-list">
            {topMovies?.map((movie) =>{
                
                return(
                    <div data-testid="movie-card" key={movie.id} className="movie-card" >
                        <Link to={`/movies/${movie.id}`}>
                            <img 
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                            alt={movie.title} />
                        </Link>
                            <p>{movie.release_date}</p>
                            <h3 data-testid= "movie-title">{movie.title}</h3>
                        
                        
                   
                    </div>
                )
                
            })}
        </div>
      
    </section>
  )
}

export default MovieList
