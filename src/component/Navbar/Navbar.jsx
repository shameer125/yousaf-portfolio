import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/logo2.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50 p-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
            <span className="w-10 h-10 flex items-center text-3xl justify-center bg-purple-600 text-white rounded">
              SY
            </span>
            Syed Yousaf
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#home"
              className="text-xl hover:text-purple-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl hover:text-purple-500 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xl hover:text-purple-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-xl hover:text-purple-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-xl hover:text-purple-500 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="hover:text-purple-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-purple-500 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:text-purple-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            className="hover:text-purple-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-purple-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
