import React, { useState } from "react";
import { fetchMovies } from "../utils/api";
import MovieCard from "./MovieCard";

const popularQueries = ["inception","avengers","matrix","joker","titanic","interstellar","batman","spider man","iron man","thor","doctor strange","captain america","guardians of the galaxy","black panther","deadpool","logan","the dark knight","harry potter","lord of the rings","hobbit","star wars","jurassic park","jurassic world","avatar","dune","oppenheimer","barbie","parasite","oldboy","fight club","se7en","shutter island","the prestige","tenet","memento","whiplash","la la land","gladiator","braveheart","the godfather","goodfellas","scarface","pulp fiction","django unchained","inglourious basterds","kill bill","reservoir dogs","the wolf of wall street","taxi driver","american psycho","blade runner","blade runner 2049","mad max","mad max fury road","terminator","terminator 2","alien","aliens","predator","the thing","back to the future","ghostbusters","rocky","rambo","mission impossible","top gun","john wick","the revenant","the social network","the imitation game","a beautiful mind","the theory of everything","forrest gump","cast away","saving private ryan","schindlers list","life is beautiful","amelie","spirited away","my neighbor totoro","princess mononoke","akira","your name","weathering with you","coco","toy story","finding nemo","ratatouille","inside out","the incredibles","frozen","moana","kung fu panda","shrek","despicable me"];

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    setLoading(true);
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
    }
    setLoading(false);
  };

  const handleSurpriseMe = async () => {
    const randomQuery =
      popularQueries[Math.floor(Math.random() * popularQueries.length)];
    setSearchTerm(randomQuery);
    setLoading(true);
    try {
      const results = await fetchMovies(randomQuery);
      setMovies(results);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex gap-2 mb-6 justify-center">
        <form onSubmit={handleSearch} className="flex w-full max-w-xl">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies..."
            className="px-4 py-2 rounded-l-md w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md transition-colors"
          >
            Search
          </button>
        </form>
        <button
          onClick={handleSurpriseMe}
          className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-md transition-colors"
        >
          Surprise Me 🎬
        </button>
      </div>

      {loading ? (
        <div className="text-center mt-8 text-gray-400">Loading...</div>
      ) : movies.length === 0 ? (
        <div className="text-center mt-8 text-gray-400">No movies found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
