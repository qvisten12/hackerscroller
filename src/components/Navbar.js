import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-95 py-4 border-b-2 border-sky-600 fixed w-full">
      <div className="px-2 md:px-6 mx-auto flex justify-between items-center container ">
        <p className="font-medium text-base">HackerScroller</p>
        <a
          className="text-gray-400"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Navbar;
