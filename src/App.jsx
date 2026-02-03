import "./index.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <span className="badge">Junior Front-End Developer</span>
        <h1>
          Ciao, sono <span>Louis</span>
        </h1>

      </header>

      <section className="about">
  <div className="about-card">
    <h2>Chi sono</h2>

    <section className="skills">
  <h2>Competenze</h2>

  <div className="skills-grid">
    <span className="skill">HTML</span>
    <span className="skill">CSS</span>
    <span className="skill">JavaScript</span>
    <span className="skill">React</span>
    <span className="skill">Git & GitHub</span>
    <span className="skill">Responsive Design</span>
    <span className="skill">Basic UI / UX</span>
  </div>
</section>
    <p>
      Ciao, sono Jeanlouis Barcebal. Ho completato un corso di Front-End Developer
      a maggio presso <strong>LabForWeb (Roma)</strong>.  
      Sono alla ricerca di una prima opportunità lavorativa per entrare nel
      settore dello sviluppo web e crescere come sviluppatore.
    </p>

    <div className="about-info">
      <div>
        <span>Nome</span>
        <strong>BARCEBAL Jeanlouis</strong>
      </div>
      <div>
        <span>Email</span>
        <strong>weebarcebal@gmail.com</strong>
      </div>
      <div>
        <span>Telefono</span>
        <strong>327 310 4063</strong>
      </div>
      <div>
        <span>Formazione</span>
        <strong>Front-End Developer – LabForWeb</strong>
      </div>
    </div>
  </div>
</section>

      <section className="projects">
        <h2>Progetti</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Morra Cinese</h3>
            <p>
              Gioco sviluppato in JavaScript durante il percorso di studio.
            </p>
            <a
              href="https://jeanlouisbarcebal-ops.github.io/morra-cinese/"
              target="_blank"
              rel="noreferrer"
            >
              Vedi progetto →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


export default App;