// src/pages/Cart.jsx
import React from "react";
import "../App.css";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate total
  const getTotal = () => {
  return cart.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    return sum + price;
  }, 0);
};

  return (
    <div className="container py-5 cart-page">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: ₹{getTotal().toFixed()}</h4>
            <button className="btn btn-success mt-2">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
