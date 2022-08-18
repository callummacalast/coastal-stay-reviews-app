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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
