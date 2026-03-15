import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link
          to="/"
          className={`flex items-center text-2xl font-bold gap-2 transition-transform duration-200 hover:scale-105 ${
            isHome ? "text-yellow-400" : "text-white"
          }`}
        >
          <FaFilm className="text-xl" />
          Auteur
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
