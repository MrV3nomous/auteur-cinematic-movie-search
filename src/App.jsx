import React from "react";
import Navbar from "./components/Navbar";
import MovieSearch from "./components/MovieSearch";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <header className="p-4 text-center text-3xl font-bold">
        Auteur: Cinematic Sandbox
      </header>
      <main className="max-w-7xl mx-auto px-4 mt-8">
        <MovieSearch />
      </main>
    </div>
  );
};

export default App;
