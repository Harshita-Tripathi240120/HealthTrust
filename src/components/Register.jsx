import React from 'react';

export default function Register() {
  return (
    <form>
      <h3 className="text-center mb-4">Register</h3>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Full name" />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Create password" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </div>
    </form>
  );
}
