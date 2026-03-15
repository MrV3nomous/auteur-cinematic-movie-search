import axios from "axios";
import { OMDB_API_KEY, OMDB_BASE_URL } from "./config";

// Search movies by title (OMDb)
export const fetchMovies = async (query) => {
  if (!query) return [];
  const trimmed = query.trim();
  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: { apikey: OMDB_API_KEY, s: trimmed, type: "movie" },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("OMDb fetch error:", error);
    return [];
  }
};

// Fetch full movie details by IMDb ID
export const fetchMovieDetails = async (imdbID) => {
  if (!imdbID) return null;
  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: { apikey: OMDB_API_KEY, i: imdbID, plot: "full" },
    });
    return response.data;
  } catch (error) {
    console.error("OMDb fetchMovieDetails error:", error);
    return null;
  }
};
