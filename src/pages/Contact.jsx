import React, { useState } from "react";
import "../App.css"; // import the CSS

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">


      <div className="map-section">
        <iframe
          title="HealthTrust Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0143930737647!2d-122.08424908469274!3d37.42206597982554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24e4653c2cb%3A0x7b264b9c2cc1d0cb!2sGoogleplex!5e0!3m2!1sen!2sin!4v1627677850070!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Fill up the form and our team will get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h4>Our contacts</h4>
        <p>healthtrust@gmail.com</p>
        <p>+91 98765-43210</p>
        <h4>Visit us</h4>
        <p>80502 Preston Rd, Inglewood, Maine 98380</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
