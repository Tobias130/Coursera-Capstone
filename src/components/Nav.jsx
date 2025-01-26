import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="z-20 flex items-center text-green md:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`md:bg-transparent absolute right-0 top-full w-48 rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 md:static md:block md:w-auto md:p-0 md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
          <li>
            <a href="/" className="text-gray-800 text-base hover:text-green">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-gray-800 text-base hover:text-green">
              About
            </a>
          </li>
          <li>
            <a href="" className="text-gray-800 text-base hover:text-green">
              Menu
            </a>
          </li>
          <li>
            <a href="" className="text-gray-800 text-base hover:text-green">
              Reservation
            </a>
          </li>
          <li>
            <a href="" className="text-gray-800 text-base hover:text-green">
              Order Online
            </a>
          </li>
          <li>
            <a href="" className="text-gray-800 text-base hover:text-green">
              Login
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="bg-black/50 fixed inset-0 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
}

export default Nav;
