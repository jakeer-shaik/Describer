import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md p-4 flex flex-wrap justify-between items-center fixed top-0 w-full z-50">
      <div className="font-bold text-xl flex items-center">
        <Link className="logo" to={"/"}>Describer</Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl md:hidden focus:outline-none"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
      <ul
        className={`flex flex-col md:flex-row md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <li>
          <Link
            to={"/"}
            onClick={() => handleMenuClick()}
            className={`font-bold px-4 py-2 block w-full text-left hover:bg-red-500 hover:text-white hover:rounded-lg`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/image-info"}
            onClick={() => handleMenuClick()}
            className={`font-bold px-4 py-2 block w-full text-left hover:bg-red-500 hover:text-white hover:rounded-lg`}
          >
            Image Analyser
          </Link>
        </li>
        <li>
          <Link
            to={"/information"}
            onClick={() => handleMenuClick()}
            className={`font-bold px-4 py-2 block w-full text-left hover:bg-red-500 hover:text-white hover:rounded-lg`}
          >
            Info Generator
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            onClick={() => handleMenuClick()}
            className={`font-bold px-4 py-2 block w-full text-left hover:bg-red-500 hover:text-white hover:rounded-lg`}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
