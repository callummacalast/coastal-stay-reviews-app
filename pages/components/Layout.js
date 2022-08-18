import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto sm:container">{children}</main>
    </div>
  );
};

export default Layout;
