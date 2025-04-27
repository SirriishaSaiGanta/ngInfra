import React from "react";
import "./About.css"; // Assuming you will add your styles in this CSS file

const About = () => {
  return (
    <section className="about-section">
      {/* Top Section: Header and Description */}
      <div className="about-header">
        <h1>About Our Company</h1>
        <p>
          Anderson Engineering was founded by John Anderson, a seasoned civil
          engineer with a vision to transform the construction landscape through
          innovative engineering solutions and sustainable practices. Since
          2015, we have been committed to delivering top-tier civil engineering
          services that focus on precision, quality, and sustainability.
        </p>
      </div>

      {/* Bottom Section: Left Content and Right Image */}
      <div className="about-content">
        <div className="left-content">
          <h2>Our Specializations:</h2>
          <ul>
            <li>
              <strong>Structural Engineering:</strong> Expertise in designing
              robust and safe structures for diverse projects.
            </li>
            <li>
              <strong>Construction Management:</strong> Proven experience
              managing all phases of construction to ensure efficient project
              delivery.
            </li>
            <li>
              <strong>Infrastructure Development:</strong> Extensive work in
              public and private infrastructure projects, focusing on long-term
              sustainability and performance.
            </li>
          </ul>

          <h3>Our Credentials:</h3>
          <ul>
            <li>Licensed Professional Engineers</li>
            <li>LEED Certified</li>
            <li>Sustainable Practices</li>
          </ul>

          <h3>Our Journey:</h3>
          <p>
            From humble beginnings to becoming a leader in the civil engineering
            field, our company has evolved with a focus on quality and
            sustainable design. We are dedicated to shaping a future that
            reflects excellence in both innovation and environmental
            responsibility. Our expertise spans across residential, commercial,
            and public sector projects, and we continue to push the boundaries
            of what is possible in construction.
          </p>
        </div>

        <div className="right-image">
          <img src="your-image-url-here.jpg" alt="Company Project" />
        </div>
      </div>
    </section>
  );
};

export default About;
