import React, { useState } from "react";
import "../App.css";

const UploadPrescription = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.file || !form.name || !form.contact) {
      alert("Please fill all fields and upload your prescription.");
      return;
    }

    // Replace with actual API integration
    alert("Prescription uploaded successfully!");

    setForm({ name: "", contact: "", file: null });
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-body p-4">
              <h3 className="mb-4 text-center " style={{ color: "#ec4899"}}>Upload Prescription</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="text"
                    name="contact"
                    className="form-control"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 9876543210"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Upload File (PDF/JPG/PNG)</label>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-pink w-100">
                  Submit Prescription
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadPrescription;
