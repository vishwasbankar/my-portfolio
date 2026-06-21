import "./ProjectCard.css";
import image from "../assets/a2.png";

function A2() {
  const technologies = [
    "React.js",
    "Node.js",
    "FastAPI",
    "LangChain",
    "Pinecone",
    "PostgreSQL",
    "GPT-4o",
  ];

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt="AI Document Assistant" />

        <span className="badge category">WEB APP</span>
        <span className="badge level">Advanced</span>
      </div>

      <div className="project-content">
        <h3>Universal Document QA Assistant</h3>

        <p>Developed a full-stack AI-powered document assistant that enables users to query PDFs, scanned documents, and images
    using natural language.
   Implemented RAG and vector search pipelines using LangChain and Pinecone for accurate semantic document retrieval.
  Integrated multimodal OCR and AI models for intelligent document processing with page-level citation support.
        </p>

        <div className="tech-stack">
          {technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <span>2025</span>

          <a
            href="https://github.com/yourusername/project-name"
            target="_blank"
            rel="noopener noreferrer"
            className="code-link"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default A2;