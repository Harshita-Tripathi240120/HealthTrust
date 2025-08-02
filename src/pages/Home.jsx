import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Dr. Aisha R.",
      message:
        "Trusted medicines and fast delivery. A go-to platform for our clinic needs.",
      rating: 5,
    },
    {
      name: "Rahul M.",
      message:
        "Customer support guided me through the prescription process smoothly.",
      rating: 4,
    },
    {
      name: "Sneha P.",
      message:
        "Affordable and high-quality pharma products. Highly recommended!",
      rating: 5,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, formData]);
    setFormData({ name: "", message: "", rating: 5 });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to HealthTrust Pharma</h1>
        <p>
          Your trusted pharmaceutical partner for quality, care, and innovation.
        </p>
        <div className="buttons">
          <Link to="/catalog">
            <button className="primary">Explore Products</button>
          </Link>
          <Link to="/b2b">
            <button className="secondary">Partner with Us</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose HealthTrust?</h2>
        <ul className="features-list">
          <li>
            <span className="icon">💊</span>
            <span className="text">Certified, high-quality medications</span>
          </li>
          <li>
            <span className="icon">🚚</span>
            <span className="text">Timely and secure delivery</span>
          </li>
          <li>
            <span className="icon">👩‍⚕️</span>
            <span className="text">Pharmacist-guided support</span>
          </li>
        </ul>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2 style={{ color: "#ec4899", textAlign: "center", fontWeight: "bold" }}>What Healthcare Professionals Say</h2>
        <div className="review-cards">
          {reviews.map((rev, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                {"★".repeat(rev.rating)}
                {"☆".repeat(5 - rev.rating)}
              </div>
              <p>{rev.message}</p>
              <h4>— {rev.name}</h4>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <form
          className="review-form container mt-5 p-4 border rounded shadow-sm"
          style={{ backgroundColor: "#ffffff" }}
          onSubmit={handleSubmit}
        >
          <h3 className="mb-4 text-center fw-bold" style={{ color: "#ec4899" }}>
            Share Your Experience
          </h3>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#ec4899" }}>
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#ec4899" }}>
              Your Message
            </label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Share your thoughts"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#ec4899" }}>
              Rating
            </label>
            <select
              className="form-select"
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: parseInt(e.target.value) })
              }
            >
              <option value="">Choose rating</option>
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>
                  {`${star} Star${star > 1 ? "s" : ""}`}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            style={{ width: "20%" }}
          >
            Submit Review
          </button>
        </form>
      </section>

      <section
        className="b2b-inquiry text-center py-5 mt-5"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <h2 style={{ color: "#ec4899" }}>Wholesale & B2B Inquiries</h2>
        <p style={{ color: "#ec4899" }}>
          Partner with us for bulk pharmaceutical orders, hospital supplies, and
          franchise opportunities.
        </p>
        <Link to="/contact" className="btn">
        <button className="btn btn-success mt-3">Contact Sales Team</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
