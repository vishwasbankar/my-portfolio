import "./ProjectCard.css";
import image from "../assets/image.png";

function A() {
  const technologies = [
    "React.js", "Node.js", "Express.js", "MongoDB", "LangChain", "Gemini API"
  ];

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt="Talent IQ" />

        <span className="badge category">WEB APP</span>
        <span className="badge level">Advanced</span>
      </div>

      <div className="project-content">
        <h3>AI Interview Preparation Platform</h3>

        <p> Built a full-stack AI-powered interview preparation platform with secure user authentication and personalized career assistance
features.
• Developed an intelligent resume and job description analysis system using LLMs, RAG, and LangChain to identify skill
gaps and generate customized preparation roadmaps.
• Implemented AI-based generation of technical interview questions, behavioral questions, and role-specific interview preparation
plans using Generative AI
        </p>

        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <span>2025</span>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="code-link"
          >
            Code
          </a>
        </div>
      </div>
    </div>
    
  );
  

}

export default A;
