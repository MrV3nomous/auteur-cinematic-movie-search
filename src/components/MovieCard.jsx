import React, { useState, useEffect } from "react";
import { FaFilm } from "react-icons/fa";
import { fetchMovieDetails } from "../utils/api";
import { Vibrant } from "node-vibrant/browser";

const MovieCard = ({ movie }) => {
  const [details, setDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [colors, setColors] = useState({
    vibrant: "#333",
    muted: "#111",
    lightVibrant: "#555",
  });

  // Extract colors from poster
  useEffect(() => {
    if (movie.Poster && movie.Poster !== "N/A") {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = movie.Poster;

      img.onload = () => {
        Vibrant.from(img)
          .getPalette()
          .then((palette) => {
            const newColors = {
              vibrant: palette.Vibrant?.hex || "#333",
              muted: palette.Muted?.hex || "#111",
              lightVibrant: palette.LightVibrant?.hex || "#555",
            };

            setColors(newColors);

            // Ambient UI lighting
            document.body.style.transition = "background 0.8s ease";
            document.body.style.background = `radial-gradient(circle at top, ${newColors.lightVibrant}33, ${newColors.muted})`;
          })
          .catch(() => {});
      };
    }
  }, [movie.Poster]);

  // Reset ambient lighting
  useEffect(() => {
    return () => {
      document.body.style.background = "#0f172a";
    };
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", escHandler);

    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const handleClick = async () => {
    const data = await fetchMovieDetails(movie.imdbID);
    setDetails(data);
    setOpen(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer relative rounded shadow overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        style={{
          boxShadow: `0 0 20px 3px ${colors.vibrant}`,
          background: `linear-gradient(135deg, ${colors.vibrant}, ${colors.muted})`,
          animation: "pulseGlow 3s infinite alternate",
        }}
      >
        {/* Poster Image or Fallback */}
        {!imageError && movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-64 object-cover bg-gray-700 transition-opacity duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-64 flex flex-col items-center justify-center bg-gray-700 text-gray-400">
            <FaFilm className="text-5xl mb-2 opacity-70" />
            <p className="text-xs text-center px-2 opacity-70">
              {movie.Title}
            </p>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
          <p className="text-sm text-gray-200">Year: {movie.Year}</p>
        </div>

        {/* Title + Palette */}
        <div className="p-2 bg-black bg-opacity-50">
          <h3 className="text-white font-semibold text-sm">
            {movie.Title}
          </h3>

          <div className="flex gap-1 mt-1">
            <div
              style={{ background: colors.vibrant }}
              className="w-3 h-3 rounded"
            />
            <div
              style={{ background: colors.muted }}
              className="w-3 h-3 rounded"
            />
            <div
              style={{ background: colors.lightVibrant }}
              className="w-3 h-3 rounded"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && details && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* Blurred poster background */}
          {movie.Poster !== "N/A" && (
            <div
              className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>

          {/* Modal Content */}
          <div
            className="relative bg-gray-900 text-white p-6 rounded max-w-lg w-full mx-4 overflow-y-auto max-h-[90vh] shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-xl font-bold"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">
              {details.Title}
            </h2>

            {/* Rating badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                IMDb {details.imdbRating}
              </span>

              <span className="text-gray-300 text-sm">
                {details.Runtime}
              </span>
            </div>

            <p className="mb-1 text-sm text-gray-300">
              {details.Genre}
            </p>

            <p className="mb-4 text-gray-200 text-sm">
              {details.Plot}
            </p>

            <a
              href={`https://www.imdb.com/title/${details.imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on IMDb
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
