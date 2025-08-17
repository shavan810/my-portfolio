import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-full relative">
        
        {/* Logo (Left) */}
        <h1 className="text-xl font-bold text-teal-400 cursor-pointer">
          MyPortfolio
        </h1>

        {/* Desktop Menu (Right) */}
        <ul className="hidden md:flex space-x-8 ml-auto">
          <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
          <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button (Center) */}
        <button
          className="md:hidden text-2xl w-[200px] focus:outline-none absolute left-1/2 transform -translate-x-1/2"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden w-full ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center text-center py-4 space-y-4">
          <li><a href="#home" onClick={handleLinkClick} className="hover:text-teal-400 text-lg">Home</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="hover:text-teal-400 text-lg">Projects</a></li>
          <li><a href="#about" onClick={handleLinkClick} className="hover:text-teal-400 text-lg">About</a></li>
          <li><a href="#skills" onClick={handleLinkClick} className="hover:text-teal-400 text-lg">Skills</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="hover:text-teal-400 text-lg">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
