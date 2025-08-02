// src/components/Footer.jsx
import React from "react";
import "./footer.css";

const Footer = () => {

  const handleSubscribe = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;

  try {
    const res = await fetch("http://localhost:5000/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});

    if (res.ok) {
      alert("🎉 Subscribed successfully!");
      e.target.reset();
    } else {
      alert("❌ Subscription failed.");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Network error.");
  }
};



  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 justify-content-between">

          {/* Brand Description */}
          <div className="col-md-4 mb-4 footer-section">
            <h4 className="text-pink">HealthTrust</h4>
            <p>Your trusted platform for reliable healthcare products and seamless service.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 footer-section">
            <h5 className="text-pink">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/catalog" className="text-white text-decoration-none">Catalog</a></li>
              <li><a href="/prescription" className="text-white text-decoration-none">Upload Prescription</a></li>
              <li><a href="/b2b" className="text-white text-decoration-none">B2B Inquiry</a></li>
            </ul>
          </div>

          {/* Newsletter + Social Icons */}
          <div className="col-md-4 mb-4">
            <h5 className="text-pink">Subscribe to Our Newsletter</h5>
<form className="newsletter-form" onSubmit={handleSubscribe}>
  <div className="input-group">
    <input
      name="email"
      type="email"
      className="form-control"
      placeholder="Enter your email"
      required
    />
    <button type="submit" className="btn btn-pink">Subscribe</button>
  </div>
</form>            <div className="socials mt-3">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3 border-top mt-4">
          &copy; {new Date().getFullYear()} HealthTrust. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
