import axios from "axios";
import { useQuery } from "react-query";

const apiKey = "8cb053e13b0207ad69c1eb0c8d8580f4";
const baseUrl = "https://api.themoviedb.org/3";

const tmbdApi = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export const useTopMovies = () => {
  return useQuery(
    "topMovies",
    async () => {
      const response = await tmbdApi.get(
        "/movie/top_rated?language=en-US&page=1"
      );
      return response.data.results.slice(0, 10);
    },
    { staleTime: Infinity }
  );
};

export const useSearchMovies = (query) => {
  return useQuery(["SearchMovies", query], async () => {
    const response = await tmbdApi.get(
      "/search/movie?include_adult=false&language=en-US&page=1",
      {
        params: {
          query,
        },
      }
    );
    return response.data.results;
  });
};

export const useMovieDetails = (movieId) => {
  return useQuery(["movieDetails", movieId], async () => {
    const response = await tmbdApi.get(`/movie/${movieId}?language=en-US`);
    console.log(response.data);
    return response.data;
  });
};
