import React, { useContext } from 'react';
import './Products.css';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'iPhone 15 Pro', price: '$999', image: './products/iPhone 15 Pro.png' },
  { id: 2, name: 'MacBook Air M2', price: '$1199', image: './products/MacBook Air M2.png' },
  { id: 3, name: 'Sony WH-1000XM5', price: '$399', image: './products/Sony WH-1000XM5.png' },
  { id: 4, name: 'Galaxy S24 Ultra', price: '$1099', image: './products/Galaxy S24 Ultra.png' },
  { id: 5, name: 'Apple Watch Ultra 2', price: '$799', image: './products/Apple Watch Ultra 2.png' },
  { id: 6, name: 'Logitech MX Mouse', price: '$99', image: './products/Logitech MX Mouse.png' },
  { id: 7, name: 'Canon EOS R10', price: '$899', image: './products/Canon EOS R10.png' },
  { id: 8, name: 'iPad Pro M4', price: '$1299', image: './products/iPad Pro M4.png' },
  { id: 9, name: 'Samsung 49 Odyssey Monitor', price: '$1499', image: './products/Samsung 49 Odyssey Monitor.png' },
  { id: 10, name: 'Bose Portable Speaker', price: '$299', image: './products/Bose Portable Speaker.png' },
  { id: 11, name: 'Kindle Paperwhite', price: '$139', image: './products/Kindle Paperwhite.png' },
  { id: 12, name: 'DJI Mini 4 Pro Drone', price: '$759', image: './products/DJI Mini 4 Pro Drone.png' }
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="products-page">
      <h2>🛍️ Our Best Tech Products</h2>
      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className="buttons">
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button className="buy-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
