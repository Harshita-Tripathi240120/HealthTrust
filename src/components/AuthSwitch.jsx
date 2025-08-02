import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function AuthSwitch() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPath = location.pathname === '/auth' || location.pathname === '/login';
  const [isLogin, setIsLogin] = useState(isLoginPath);

  useEffect(() => {
    navigate(isLogin ? '/login' : '/register');
  }, [isLogin]);

  return (
    <div className="auth-container p-4">
      <div className="switch-track position-relative">
        <div
          className="switch-thumb"
          style={{ left: isLogin ? "4px" : "48%" }}
        ></div>
        <div className="switch-label" onClick={() => setIsLogin(true)}>Login</div>
        <div className="switch-label" onClick={() => setIsLogin(false)}>Register</div>
      </div>

      {isLogin ? <Login /> : <Register />}
    </div>
  );
}
