import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="contact-page">
      <h2>📩 Contact Us</h2>

      {submitted ? (
        <div className="success-message">
          <h3>✅ Message Sent!</h3>
          <p>We’ll get back to you as soon as possible.</p>
        </div>
      ) : (
        <>
          <p className="contact-info">
            Got a question or feedback? Fill out the form below, and we’ll reach out!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Contact;
