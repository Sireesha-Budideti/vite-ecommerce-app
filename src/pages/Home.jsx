import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const bestSellers = [
    { name: 'iPhone 15 Pro', price: '$999', img: './products/iPhone 15 Pro.png' },
    { name: 'MacBook Air M2', price: '$1199', img: './products/MacBook Air M2.png' },
    { name: 'Sony WH-1000XM5', price: '$399', img: './products/Sony WH-1000XM5.png' },
    { name: 'Apple Watch Ultra', price: '$799', img: './products/Apple Watch Ultra 2.png' },
  ];

  const feedback = [
    {
      name: 'Rohit S.',
      comment: 'TechNest is amazing! Got my MacBook delivered within 2 days!',
    },
    {
      name: 'Ananya P.',
      comment: 'Loved the experience. Smooth checkout and great support.',
    },
    {
      name: 'Mohammed A.',
      comment: 'Products are 100% genuine and shipping was fast.',
    },
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to TechNest 🌐</h1>
        <p><b>Your trusted destination for cutting-edge gadgets and smart tech.<br/><br/></b></p>
        <a href="/products" className="shop-now">Shop Now</a>
        <img 
          src='./products/Hero.png'
          alt="Hero Banner" 
          className="hero-image" 
        />
      </div>

      <div className="products-section">
        <h2>🔥 Best Selling Products</h2>
        <div className="product-cards">
          {bestSellers.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-section">
        <h2>💬 What Our Customers Say</h2>
        <div className="feedback-cards">
          {feedback.map((f, i) => (
            <div className="feedback-card" key={i}>
              <p>"{f.comment}"</p>
              <h4>- {f.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="subscribe-section">
        <h2>📬 Subscribe for Updates</h2>
        {submitted ? (
          <p className="thank-you-msg">✅ Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;
