import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const B2BInquiryForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add API logic to send data

    toast.success("Inquiry submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setFormData({
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid custom-container py-5">
      <h2 className="mb-4 text-center">B2B Inquiry</h2>
      <p className="text-center mb-5">
        Looking to partner with us for wholesale or bulk purchases? Fill out the form below and our team will contact you shortly.
      </p>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Business Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your company name"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Contact Person</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="example@business.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="+91 12345 67890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Message / Requirement</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Let us know what you need"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">Submit Inquiry</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default B2BInquiryForm;
