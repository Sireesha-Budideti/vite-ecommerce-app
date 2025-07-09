import React, { useContext, useState } from 'react';
import './Checkout.css';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (form.name && form.address && form.email && form.phone) {
      alert("🎉 Thanks for ordering! We'll keep updating you about your order.");
      clearCart();
      navigate('/');
    } else {
      alert('Please fill out all details.');
    }
  };

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty. Go back to products.</p>
      ) : (
        <>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name} - {item.price}</li>
              ))}
            </ul>
          </div>

          <div className="checkout-form">
            <h3>Shipping Information</h3>
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
