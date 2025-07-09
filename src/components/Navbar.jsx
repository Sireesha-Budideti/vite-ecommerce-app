import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../pages/CartIcon'; // ✅ Make sure the path is correct!
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li>TechNest🌐</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* ✅ Use CartIcon instead of static link */}
        <CartIcon />
      </div>
    </nav>
  );
}

export default Navbar;
