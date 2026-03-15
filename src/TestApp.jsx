import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TrendingMovies from "./components/TrendingMovies";
import SquadBuilder from "./components/SquadBuilder";
import MovieCard from "./components/MovieCard";

// Dummy movie data for testing
const dummyMovies = [
  {
    Title: "The Matrix",
    Year: "1999",
    imdbID: "tt0133093",
    Type: "movie",
    Poster: "https://via.placeholder.com/200x300",
    imdbRating: "8.7",
  },
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
    Type: "movie",
    Poster: "https://via.placeholder.com/200x300",
    imdbRating: "8.8",
  },
];

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorInfo });
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    // Optionally store logs in localStorage or a variable
    window.__TEST_LOGS = window.__TEST_LOGS || [];
    window.__TEST_LOGS.push(`${new Date().toISOString()} - ${error}\n${errorInfo.componentStack}\n`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-900 text-white">
          <h2>Component failed to render!</h2>
          <pre>{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Function to export logs
const exportLogs = () => {
  const logs = (window.__TEST_LOGS || []).join("\n\n");
  const blob = new Blob([logs || "No logs found."], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "test_logs.txt";
  link.click();
};

const TestApp = () => {
  const [selectedMovies, setSelectedMovies] = useState(dummyMovies);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <button
        onClick={exportLogs}
        className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Export Error Logs
      </button>

      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <h2 className="text-2xl my-4">TrendingMovies Test</h2>
        <TrendingMovies selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
      </ErrorBoundary>

      <ErrorBoundary>
        <h2 className="text-2xl my-4">SquadBuilder Test</h2>
        <SquadBuilder selectedMovies={selectedMovies} />
      </ErrorBoundary>

      <ErrorBoundary>
        <h2 className="text-2xl my-4">MovieCard Test</h2>
        <div className="grid grid-cols-2 gap-4">
          {dummyMovies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} draggable />
          ))}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default TestApp;
