import React from "react";
import logo from "../img/header/logo.svg";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <div className="fixed w-full bg-white px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <h1 className="text-4xl font-bold text-blue-300">9928150744</h1>
        </Link>

        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-black transition focus:outline-none"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-black transition focus:outline-none"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-black transition focus:outline-none"
          >
            Portfolio
          </Link>
        </nav>
      </div>

      <Socials />

      <MobileNav />
    </div>
  );
};

export default Header;
