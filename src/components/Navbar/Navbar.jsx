import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { navbar } from "../../apis";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const { nav_logo, links } = navbar;
  return (
    <>
      <div className=" w-full z-50 max-w-[1450px] mx-auto px-3 md:px-16 sticky top-0  bg-gradient-to-r from-yellow to-transparent py-3">
        <div className="text-right capitalize mb-2 text-sm mr-3 font-montserrat text-gray-800 font-medium">express delivery-01632042970</div>
        <nav
          className="flex relative 
       justify-between items-center"
        >
          <div>
            <Link className="uppercase text-2xl relative top-1 font-bold font-poppins text-gray-800" to="/">
              <FaHamburger className="inline-block text-3xl mb-2 mr-1"/>burger hunt
            </Link>
          </div>
          <div
            className={`absolute md:static w-3/4 ${
              toggle ? "scale-[0] md:scale-[1]" : "scale-1"
            } md:w-fit min-h-[89vh] md:min-h-fit  top-[48px]  pt-3 pr-3 bg-yellow md:bg-transparent transition-all duration-500 -left-5 origin-top-left`}
          >
            {links.map((link) => (
              <NavLink
                key={link.id}
                className={`block md:inline uppercase font-inter font-medium py-2 ml-9 text-sm border-b-2 border-slate-600 text-slate-600 md:border-none last:border-b-transparent md:text-md hover:text-blue my-${link.my}`}
                to={link.path}
                style={({ isActive }) => (
                  isActive?{borderBottom:"2px solid #0f172a",color:"#0f172a"}:{}
                )}
                end
                onClick={() => setToggle((prev) => !prev)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button
            className="block md:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 transition-all duration-500 text-slate-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  toggle
                    ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    : "M6 18L18 6M6 6l12 12"
                }
              />
            </svg>
          </button>
        </nav>
      </div>
     
    </>
  );
}
