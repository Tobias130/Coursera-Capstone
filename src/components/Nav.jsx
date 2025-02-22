import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="z-20 flex items-center text-green md:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`md:bg-transparent absolute right-0 top-full w-48 rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 md:static md:block md:w-auto md:p-0 md:shadow-none ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
          <li>
            <a
              href="/"
              className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-green before:transition-all before:duration-300 hover:before:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-green before:transition-all before:duration-300 hover:before:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-green before:transition-all before:duration-300 hover:before:w-full"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/reservation"
              className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-green before:transition-all before:duration-300 hover:before:w-full"
            >
              Reservation
            </a>
          </li>
          <li>
            <a
              href="/order-online"
              className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-green before:transition-all before:duration-300 hover:before:w-full"
            >
              Order Online
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-green before:transition-all before:duration-300 hover:before:w-full"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>

      {/* Does not work */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="bg-black/50 fixed inset-0 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Nav;
