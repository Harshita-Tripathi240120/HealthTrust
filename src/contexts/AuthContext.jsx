import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Provide auth state to app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("auth") === "true"
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easier access
export const useAuth = () => useContext(AuthContext);
