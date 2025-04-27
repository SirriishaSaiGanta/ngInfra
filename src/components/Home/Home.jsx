import "./Home.css";
export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          Building Excellence in{" "}
          <span className="highlight">Civil Engineering</span>
        </h1>
        <p>
          Transforming visions into reality with innovative engineering
          solutions and quality construction. Your trusted partner for all civil
          engineering projects.
        </p>
        <div className="buttons">
          <button className="btn-primary">Our Services</button>
          <button className="btn-outline">View Projects</button>
        </div>
        <div className="scroll-indicator">↓</div>
      </div>
    </section>
  );
}
