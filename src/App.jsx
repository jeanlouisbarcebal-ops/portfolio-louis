import "./index.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <span className="badge">Junior Front-End Developer</span>
        <h1>
          Ciao, sono <span>Louis</span>
        </h1>
        <p>
          Sto studiando Front-End Development e costruisco interfacce moderne con
          JavaScript e React.
        </p>
      </header>

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