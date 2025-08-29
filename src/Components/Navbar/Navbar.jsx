import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar px-0 bg-white/60 backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn hover:bg-none active:bg-none btn-ghost pl-0 border-none lg:hidden"
          >
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-200 rounded-box z-100 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}> Home</NavLink>
            </li>
            <li>
              <NavLink to={"/listedbooks"}> Listed Books</NavLink>
            </li>
            {/* <li>
              <NavLink to={"/pagestoread"}> Pages to Read</NavLink>
            </li> */}
          </ul>
        </div>

        <Link to={"/"}>
          <a className="text-xl">BoiPoka</a>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}> Home</NavLink>
          </li>
          <li>
            <NavLink to={"/listedbooks"}> Listed Books</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/pagestoread"}> Pages to Read</NavLink>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn border rounded-md">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
