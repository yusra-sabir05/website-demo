"use client";

import React, { useState } from "react";
import Nav from "../../../component/page";

function Contact() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    course: "Mathematics for AI", // Default course
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data submitted:", formData);
    
    // Reset form fields after submission
    setFormData(initialFormState);
  };

  return (
    <div className="contact-container">
      <Nav />
      <div className="contact-content">
        <div className="contact-about">
          <h2>About the Institute</h2>
          <p>
            Welcome to [Be Advance Learning Institute], where we empower the
            next generation of AI professionals. Our comprehensive curriculum,
            developed by industry experts, equips students with the skills
            needed to excel in the rapidly evolving field of AI. We offer
            certifications recognized by industry leaders, enhancing our
            students' career prospects.
          </p>
          <p>
            Unique Teaching Approach Our teaching approach is a blend of
            interactive online classes, real-world projects, and personalized
            mentoring. We believe in fostering a learning environment that
            encourages curiosity and innovation, ensuring that our students not
            only understand AI but also know how to apply it effectively.
          </p>
          <p>
            Upon completion of our programs, students receive certifications
            that are recognized by industry leaders, helping them stand out in
            the job market.
          </p>
        </div>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Select Course:</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <optgroup label="Foundational Courses">
                  <option value="Mathematics for AI">Mathematics for AI</option>
                  <option value="Programming for AI">Programming for AI</option>
                  <option value="Data Structures and Algorithms">
                    Data Structures and Algorithms
                  </option>
                </optgroup>
                <optgroup label="Machine Learning Courses">
                  <option value="Supervised Learning">
                    Supervised Learning
                  </option>
                  <option value="Unsupervised Learning">
                    Unsupervised Learning
                  </option>
                  <option value="Deep Learning">Deep Learning</option>
                </optgroup>
                <optgroup label="AI Specializations">
                  <option value="Natural Language Processing">
                    Natural Language Processing
                  </option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="Robotics and Control Systems">
                    Robotics and Control Systems
                  </option>
                </optgroup>
                <optgroup label="Advanced AI Topics">
                  <option value="Generative Models">Generative Models</option>
                  <option value="AI Ethics and Fairness">
                    AI Ethics and Fairness
                  </option>
                </optgroup>
                <optgroup label="Other AI-Related Courses">
                  <option value="Big Data and Distributed Computing">
                    Big Data and Distributed Computing
                  </option>
                  <option value="Cloud Computing">Cloud Computing</option>
                </optgroup>
              </select>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
