// src/pages/Catalog.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import "../App.css";

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description: "Effective relief for fever and mild pain.",
    price: "₹25",
  },
  {
    id: 2,
    name: "Cough Syrup",
    description: "Soothes sore throat and reduces coughing.",
    price: "₹80",
  },
  {
    id: 3,
    name: "Vitamin C Tablets",
    description: "Boosts immunity and fights fatigue.",
    price: "₹150",
  },
  {
    id: 4,
    name: "Antacid Tablets",
    description: "Quick relief from heartburn and acidity.",
    price: "₹40",
  },
  {
    id: 5,
    name: "Ibuprofen 200mg",
    description: "Relieves pain, inflammation, and fever.",
    price: "₹30",
  },
  {
    id: 6,
    name: "Calcium Supplements",
    description: "Strengthens bones and prevents deficiencies.",
    price: "₹120",
  },
  {
    id: 7,
    name: "Allergy Relief Tablets",
    description: "Alleviates sneezing, itching, and runny nose.",
    price: "₹75",
  },
  {
    id: 8,
    name: "Multivitamin Capsules",
    description: "Daily dose of essential vitamins and minerals.",
    price: "₹200",
  },
  {
    id: 9,
    name: "ORS Sachets",
    description: "Rehydrates and restores electrolyte balance.",
    price: "₹15",
  },
  {
    id: 10,
    name: "Nasal Decongestant Spray",
    description: "Clears blocked nose instantly.",
    price: "₹95",
  },
  {
    id: 11,
    name: "Anti-Fungal Cream",
    description: "Treats skin infections and rashes.",
    price: "₹60",
  },
  {
    id: 12,
    name: "Antibiotic Ointment",
    description: "Prevents infections in minor cuts and burns.",
    price: "₹55",
  },
  {
    id: 13,
    name: "Eye Drops",
    description: "Relieves eye irritation and dryness.",
    price: "₹70",
  },
  {
    id: 14,
    name: "Inhaler",
    description: "Quick relief from asthma symptoms.",
    price: "₹250",
  },
  {
    id: 15,
    name: "Diabetes Test Strips",
    description: "Used with glucometer to monitor blood sugar.",
    price: "₹400",
  },
  {
    id: 16,
    name: "Blood Pressure Monitor",
    description: "Digital device to check BP at home.",
    price: "₹1,299",
  },
];
 

const PRODUCTS_PER_PAGE = 8;

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart, removeFromCart } = useCart(); 
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className="catalog-page container py-4">
      <h2 className="text-center mb-4">Product Catalog</h2>
      <div className="row">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card product-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="pagination-nav mt-4 d-flex justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, idx) => (
            <li
              key={idx}
              className={`page-item ${currentPage === idx + 1 && "active"}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(idx + 1)}
              >
                {idx + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages && "disabled"}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Catalog;
