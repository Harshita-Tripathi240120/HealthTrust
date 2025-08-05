import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css"; // Optional: Your custom styles
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const isSuccess = login(email, password); // Simulate auth
    if (isSuccess) {
      navigate("/"); // ✅ Redirect to home or dashboard after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center py-5 bg-light min-vh-100">
      <div
        className="login-box bg-white p-4 rounded shadow-sm"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <h2 className="text-center mb-4">🔐 HealthTrust Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
