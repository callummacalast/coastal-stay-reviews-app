import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/">
            <p className="text-white cursor-pointer">
              Coastal Stay Message Board
            </p>
          </Link>

          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/coastalstay"
              className="bg-white hover:text-red-300 rounded shadow lg:p-2 md:p-1 p-0.5 text-xs flex justify-center items-center "
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/coastalstay/"
              className="bg-white hover:text-red-300 rounded shadow lg:p-2 md:p-1 p-0.5 text-xs flex justify-center items-center "
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
