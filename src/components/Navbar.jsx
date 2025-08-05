import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext"; // Add this
import "../App.css";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth(); // Get user and logout
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  return (
    <nav
      className={`navbar ${darkMode ? "dark" : ""}`}
      style={{
        padding: "1rem",
        background: "#1f2937",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Brand */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        💊 <span style={{ color: "#ec4899" }}>HealthTrust</span>
      </div>

      {/* Dropdown */}
      <div className="dropdown" ref={dropdownRef} style={{ position: "relative", display: "flex" }}>
        <button
  className="dropdown-toggle"
  onClick={(e) => {
    e.stopPropagation(); // prevent event bubbling
    setDropdownOpen(prev => !prev);
  }}
  style={{
    background: "none",
    border: "none",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  }}
>
  Explore
</button>

        {dropdownOpen && (
          <div
            className="dropdown-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              backgroundColor: "#374151",
              zIndex: 9999,
              display: "block",
              padding: "10px",
              borderRadius: "8px",
              minWidth: "180px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Link to="/" onClick={() => setDropdownOpen(false)} style={linkStyle}>Home</Link>
            <Link to="/catalog" onClick={() => setDropdownOpen(false)} style={linkStyle}>Catalog</Link>
            <Link to="/prescription" onClick={() => setDropdownOpen(false)} style={linkStyle}>Upload Prescription</Link>
            <Link to="/b2b" onClick={() => setDropdownOpen(false)} style={linkStyle}>B2B Inquiry</Link>
            <Link to="/about" onClick={() => setDropdownOpen(false)} style={linkStyle}>About Us</Link>
          </div>
        )}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link to="/cart" style={linkStyle}>Cart ({cart.length})</Link>

        {user ? (
          <>
            <span style={{ color: "white" }}>{user.name || user.email}</span>
            <button onClick={logout} style={{ ...linkStyle, background: "none", border: "none" }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}

        {/* Theme switch */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            color: "white",
          }}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "10px 16px",
};

export default Navbar;
