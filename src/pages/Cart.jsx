import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart, buy } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ Create navigate instance

  const handlePlaceOrder = () => {
    // ✅ Optional: Call your buy logic if you have it
    if (buy) {
      buy(cartItems);
    }
    // ✅ Optional: Clear cart here or after successful checkout
    // clearCart(); // Uncomment if you want to clear immediately

    // ✅ Navigate to /checkout page
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            <button className="checkout-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
