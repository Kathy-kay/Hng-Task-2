import { useMovieDetails } from "./tmbd" 
import { useParams } from "react-router-dom";




const MovieDetails = () => {
  const {movieId} = useParams()
  const  {data: movieDetails, isLoadng, isError} = useMovieDetails(movieId);
console.log(movieDetails)
  if(isLoadng){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error fetching movie details  </h1>
  }


 
    const releaseDateUTC = new Date(movieDetails.release_date).toUTCString();

  return (
    <div className="movieDetails">
      <img src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} 
      alt={movieDetails.title} />
      <div className="movie-details-desc">
        <h3>{movieDetails.title}</h3>
        <p>{movieDetails.runtime}</p>
        <p>{releaseDateUTC}</p>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails
