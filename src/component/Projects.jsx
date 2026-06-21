
function Projects() {
  const projects = [
    {
      title: "AI Government Scheme Assistant",
      description:
        "AI-powered platform that recommends government schemes based on user eligibility.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Universal Document QA Assistant",
      description:
        "Upload documents and ask questions using AI-powered document understanding.",
      tech: ["React", "Express", "Python"],
    },
    {
      title: "Temporary Email Generator",
      description:
        "Generate disposable email addresses for privacy and testing.",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="projects">
      <p className="section-tag">PORTFOLIO</p>

      <h2 className="section-title">
        All <span>Projects</span>
      </h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href="/">GitHub</a>
              <a href="/">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;