import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <p className="section-tag">PROFESSIONAL JOURNEY</p>

      <h2 className="section-title">
        Experience & <span>Achievements</span>
      </h2>

      {/* Internship Card */}
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
            Developed and maintained web applications using modern
            technologies while collaborating with senior developers.
          </li>

          <li>
            Gained hands-on experience in software development lifecycle,
            debugging, and deployment processes.
          </li>
        </ul>
      </div>

      {/* Achievements Card */}
      <div className="experience-card">
        <div className="card-header">
          <div>
            <h3>Achievements & Certifications</h3>
            <p className="company">
              Hackathons, Certifications & Technical Events
            </p>
          </div>
        </div>

        <ul className="achievement-list">
          <li>
            Qualified for the internal round of Smart India Hackathon (SIH)
            2025 at ISBM College of Engineering, Pune with team Code for Cause
            for developing Agrinova, an AI-powered crop yield prediction and
            agricultural optimization platform.
          </li>

          <li>
            Participated in inter-college hackathons and coding competitions,
            including technical events organized at Sinhgad College and other
            institutes.
          </li>

          <li>
            React.js Certification — React Framework Certification (June 2025).
          </li>

          <li>
            MongoDB Certification — MongoDB Database Management (Sep 2025).
          </li>

          <li>
            IBM Certification — Prompt Engineering for Everyone.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;