import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        
        {/* Logo */}
        <h1 className="text-lg sm:text-2xl font-extrabold tracking-wide text-teal-400 cursor-pointer">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-lg font-semibold tracking-wide 
                hover:text-teal-400 transition duration-300 
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger (Right corner) */}
        <button
          className="md:hidden text-3xl focus:outline-none hover:text-teal-400 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden w-full ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center text-center py-4 space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-xl font-bold tracking-wide text-white 
                hover:text-teal-400 hover:scale-110 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
