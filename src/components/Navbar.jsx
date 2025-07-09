import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../pages/CartIcon';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
 <div className="navbar-left">
  <span className="brand">TechNest🌐</span>  {/* ✅ No more orphan <li> */}
  <div className="menu-toggle" onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
    <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
    <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
  </ul>
</div>


      <div className="navbar-right">
        <CartIcon />
      </div>
    </nav>
  );
}

export default Navbar;
