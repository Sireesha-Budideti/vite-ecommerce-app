import React, { useState } from 'react';
import './Back.css'; // Importing CSS for styling

function Return() {
  const [form, setForm] = useState({ name: '', email: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.reason) {
      setSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="return-page">
      <h2>🔁 Return Request</h2>

      {!submitted ? (
        <>
          <p className="info">
            We accept returns within <strong>7 days</strong> of delivery. Items must be unused and in original condition.
          </p>

          <form className="return-form" onSubmit={handleSubmit}>
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
              name="reason"
              placeholder="Reason for return"
              rows="4"
              value={form.reason}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit Return Request</button>
          </form>
        </>
      ) : (
        <div className="thanks-msg">
          <h3>✅ Thank you!</h3>
          <p>We’ve received your return request. We’ll contact you shortly via email.</p>
        </div>
      )}
    </div>
  );
}

export default Return;
