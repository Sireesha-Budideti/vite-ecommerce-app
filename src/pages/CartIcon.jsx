// pages/CartIcon.jsx

import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './CartIcon.css';

function CartIcon() {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon">
      🛒
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
    </Link>
  );
}

export default CartIcon;
