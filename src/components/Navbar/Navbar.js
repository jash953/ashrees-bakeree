import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify content center">
      <ul>
        <a href="/home" className="nav-item px 2">
          HOME
        </a>
        <a href="/products" className="nav-item px 2">
          PRODUCTS
        </a>
        <a href="/contact" className="nav-item px 2">
          CONTACT
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;