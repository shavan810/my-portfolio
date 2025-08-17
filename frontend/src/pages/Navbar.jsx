// src/components/Navbar.jsx
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-teal-400 tracking-wide">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
          {navLinks.map((nav, i) => (
            <li key={i}>
              <a
                href={nav.link}
                className="relative group"
              >
                {nav.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4">
          {navLinks.map((nav, i) => (
            <li key={i}>
              <a
                href={nav.link}
                className="text-base sm:text-lg hover:text-teal-400 transition-colors"
                onClick={() => setOpen(false)} // close menu on click
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
