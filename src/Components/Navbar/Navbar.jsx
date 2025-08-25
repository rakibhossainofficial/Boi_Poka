import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost pl-0 border-none lg:hidden">
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
            className="menu menu-sm dropdown-content bg-red-400 rounded-box z-100 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">BoiPoka</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}> Home</NavLink>
          </li>
          <li>
            <NavLink to={"/listedbooks"}> Listed Books</NavLink>
          </li>
          <li>
            <NavLink to={"/pagestoread"}> Pages to Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn border rounded-md">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
