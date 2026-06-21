const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  year,
  category,
  level,
  codeLink,
}) => {
  return (
    <>
      <h2 className="section-title">Projects</h2>

      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />

          <span className="badge category">{category}</span>
          <span className="badge level">{level}</span>
        </div>

        <div className="project-content">
          <h3>{title}</h3>

          <p>{description}</p>

          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-footer">
            <span>{year}</span>

            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="code-link"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};