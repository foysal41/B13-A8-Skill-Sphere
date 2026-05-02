import React from "react";
import { MdCastForEducation } from "react-icons/md";
import Navlink from "./Navlink";
import Link from "next/link";

const header = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="navbar bg-base-100 shadow-sm rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* For Mobile Menu */}
              <li>
                <Navlink href={"/"}>Home</Navlink>
              </li>
              <li>
                <Navlink href={"/courses"}>Courses</Navlink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-white hover:border-0 hover:shadow-none text-xl">
            <MdCastForEducation className="text-[#5B5AEF] h-10 w-10" />
            Skill Sphere
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* for desktop */}
            <li>
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li>
              <Navlink href={"/courses"}>Courses</Navlink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <Link
            href={"/login"}
            className="btn border border-[#4B4BF3] text-[#4B4BF3] rounded-md bg-white"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="btn  text-white rounded-md bg-[#4B4BF3]"
          >
            Register
          </Link>
        </div>

        {/* <div className="flex flex-row items-center gap-4">
          <img src="" alt="" />
          <h4>Hi, Sarah</h4>
          <a className="btn border border-red-500 text-red-500 rounded-md bg-white">
            Login
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default header;
