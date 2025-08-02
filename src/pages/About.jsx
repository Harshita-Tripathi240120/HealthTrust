import React, { useState } from "react";
import "../App.css";


const teamMembers = [
  {
    name: "Dr. Ayesha Verma",
    role: "Chief Medical Officer",
    description: "15+ years of experience in pharmaceutical R&D and healthcare innovation.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Rajeev Malhotra",
    role: "Head of Operations",
    description: "Operational leader ensuring supply chain excellence and quality assurance.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ms. Nidhi Gupta",
    role: "Director of Marketing",
    description: "10+ years in pharma branding, digital outreach, and customer engagement.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Mr. Arjun Mehra",
    role: "CTO",
    description: "Tech visionary driving digital transformation and smart health solutions.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container py-5 about-page ${darkMode ? "dark-theme" : "light-theme"}`}>
     

      <h2 className="text-center fw-bold mb-3" style={{ color:"black"}}>About HealthTrust</h2>
      <p className="text-center text-muted mb-5">
        We are committed to delivering trustworthy pharmaceutical products and services that improve lives.
        Our team blends innovation, experience, and compassion.
      </p>

      <h3 className="text-center fw-semibold mb-4">Meet Our Team</h3>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card team-card text-center shadow-sm h-100">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top rounded-circle mx-auto mt-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <h6 className="text-primary">{member.role}</h6>
                <p className="card-text text-muted">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
