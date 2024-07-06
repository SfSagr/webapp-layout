import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/svg/NavSvg/logo.svg";
import Name from "../assets/svg/NavSvg/name.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex  md:flex-row justify-around items-center py-4 px-6 md:py-6">
      <div className="logo flex gap-1 items-center">
        <img src={logo} alt="Logo" />
        <img src={Name} alt="Name" />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className={`menu font-nSans mt-4 md:mt-0 ${isMenuOpen ? "block" : "hidden"} md:flex`}>
        <ul className="flex flex-col md:flex-row gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className="font-normal text-[16px] leading-[36px] text-center text-[#332C5C]"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="font-normal text-[16px] leading-[36px] text-center text-[#332C5C]"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="service"
              className="font-normal text-[16px] leading-[36px] text-center text-[#332C5C]"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className="font-normal text-[16px] leading-[36px] text-center text-[#332C5C]"
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className="font-normal text-[16px] leading-[36px] text-center text-[#332C5C]"
              onClick={toggleMenu}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="btn hidden md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 font-nSans items-center">
        <button className="font-medium text-[15px] leading-6 text-[#8976FD] w-[70px] h-[35px] md:w-[90px] md:h-[40px]">
          Login
        </button>
        <div className="w-[100px] h-[35px] text-center gap-[10px] rounded-lg border-2 md:w-[110px] md:h-[40px]">
          <button className="font-medium text-[15px] leading-6 text-[#8976FD] w-full h-full">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
