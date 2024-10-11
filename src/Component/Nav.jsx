import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <nav className="bg-[#100a3d] text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Main Heading */}
        <div className="text-2xl font-bold">
          Fresher's 2024
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-8 absolute md:static bg-[#100a3d] md:bg-transparent left-0 w-full md:w-auto transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
          <li>
            <NavLink
              to="/book-your-seat"
              className={({ isActive }) => (isActive ? 'text-gray-300' : 'hover:text-gray-300')}
            >
              Book Your Seat
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/performance"
              className={({ isActive }) => (isActive ? 'text-gray-300' : 'hover:text-gray-300')}
            >
              Performance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'text-gray-300' : 'hover:text-gray-300')}
            >
              Register for Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'text-gray-300' : 'hover:text-gray-300')}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'text-gray-300' : 'hover:text-gray-300')}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
