import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAuth = localStorage.getItem("auth") === "true";
    if (storedAuth && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    const registered = JSON.parse(localStorage.getItem("registeredUser"));

    // Check against registered user or allow demo login
    if (
      (registered && registered.email === email && registered.password === password) ||
      (email === "admin@healthtrust.com" && password === "admin123")
    ) {
      const userData = { email, name: email.split("@")[0] }; // add name if needed
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const register = (email, password) => {
    const userData = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for components
export const useAuth = () => useContext(AuthContext);
