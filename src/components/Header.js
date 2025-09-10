
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Make sure Link is imported

const NavLink = ({ to, children }) => (
  // Use the 'to' prop for the Link component
  <Link to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
    {children}
  </Link>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

export default function Header({ onGetStartedClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">CyberSec Nexus</Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {/* These are now Link components */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tutorials">Tutorials</NavLink>
            <NavLink to="/tools">Tools</NavLink>
            <NavLink to="/holographic">3D Demo</NavLink>
          </div>

          <div className="hidden md:block">
            <button onClick={onGetStartedClick} className="bg-red-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <MenuIcon />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/" className="block text-gray-300 hover:text-white py-2">Home</Link>
            <Link to="/tutorials" className="block text-gray-300 hover:text-white py-2">Tutorials</Link>
            <Link to="/tools" className="block text-gray-300 hover:text-white py-2">Tools</Link>
            <Link to="/holographic" className="block text-gray-300 hover:text-white py-2">3D Demo</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
