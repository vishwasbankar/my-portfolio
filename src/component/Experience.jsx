import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <p className="section-tag">PROFESSIONAL JOURNEY</p>

      <h2 className="section-title">
        Experience & <span>Achievements</span>
      </h2>

      <div className="experience-card">
        <div className="card-header">
          <div>
            <h3>Software Engineer Intern</h3>
            <p className="company">
              TechnoWings International IT Solutions
            </p>
          </div>

          <span className="duration">Jul 2023 – Aug 2023</span>
        </div>

        <ul className="achievement-list">
          <li>
            Built REST APIs in Node.js and Express.js for authentication
            workflows, reducing support queries.
          </li>

          <li>
            Developed React.js UI components with form validation and resolved
            multiple bugs during sprint reviews.
          </li>

          <li>
            Integrated Cloudinary API for media uploads, improving asset
            management and load performance.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;