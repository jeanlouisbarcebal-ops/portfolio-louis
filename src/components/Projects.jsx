const projects = [
  {
    title: "Todo App",
    description: "Applicazione JavaScript per gestire le attività",
    tech: "HTML, CSS, JavaScript",
    github: "#",
    demo: "#",
  },
  {
    title: "Calcolatrice",
    description: "Calcolatrice realizzata in JavaScript",
    tech: "HTML, CSS, JavaScript",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Progetti</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>

            <div className="project-links">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.demo} target="_blank">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;