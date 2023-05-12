import React from "react";
import { FaHome, FaUserAlt, FaBook, FaFolderOpen, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <nav
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg w-max flex px-7 
        py-3 z-10 fixed left-1/2 -translate-x-1/2 bottom-6"
    >
      <a
        href="/#home"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-[#58E3C4] 
            transition-all duration-200 ease-linear"
      >
        <FaHome />
      </a>
      <a
        href="/#about"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-[#58E3C4] 
            transition-all duration-200 ease-linear"
      >
        <FaUserAlt />
      </a>
      <a
        href="/#experience"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-[#58E3C4] 
            transition-all duration-200 ease-linear"
      >
        <FaBook />
      </a>
      <a
        href="/#works"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-[#58E3C4] 
            transition-all duration-200 ease-linear"
      >
        <FaFolderOpen />
      </a>
      <a
        href="/#contact"
        className="bg-transparent py-2 px-4 rounded-[50%] text-lg hover:text-[#58E3C4] 
            transition-all duration-200 ease-linear"
      >
        <FaPhoneAlt />
      </a>
    </nav>
  );
};

export default Header;
