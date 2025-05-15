import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Optional: close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#mobile-menu") && !e.target.closest("#hamburger-button")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-dark border rounded-full text-white p-4 m-5 flex items-center justify-between relative">
      <Link className="font-bold text-xl tracking-tight" to="/">
        NextMe
      </Link>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button id="hamburger-button" onClick={toggleMenu} aria-label="Toggle Menu">
          {/* Replace this with your custom SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-2">
        <Link className="text-sm px-4 py-2 rounded-full hover:bg-gray-700" to="/">Home</Link>
        <Link className="text-sm px-4 py-2 rounded-full hover:bg-gray-700" to="/about">About</Link>
        <Link className="text-sm px-4 py-2 rounded-full hover:bg-gray-700" to="/login">Login</Link>
        <Link className="text-sm px-4 py-2 rounded-full hover:bg-gray-700" to="/signup">Signup</Link>
         <Link className="text-sm px-4 py-2 rounded-full hover:bg-gray-700" to="/profile">Profile</Link>


      </div>

      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 right-4 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 md:hidden"
        >
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
           <Link 
             to="/profile" 
            className="block px-4 py-2 hover:bg-gray-700" 
             onClick={() => setMenuOpen(false)} 
           > 
             Profile 
          </Link>
          
        </div>
      )}
    </nav>
  );
}

export default NavBar;
