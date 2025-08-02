import React from 'react';

export default function Login() {
  return (
    <form>
      <h3 className="text-center mb-4">Login</h3>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}
