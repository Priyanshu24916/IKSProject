import { Link } from "react-router-dom";
import "./Vallabhi.css";

function Vallabhi() {
  return (
    <div className="vallabhi-page">

      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

      <div className="vallabhi-hero">
        <p>ANCIENT CENTRE OF LEARNING</p>

        <h1>Vallabhi</h1>

        <span>📍 Gujarat, India</span>

       <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/Vallabhi%20Council%20-%20Sculptural%20Depiction.jpg"
  alt="Vallabhi historical heritage"
  className="vallabhi-image"
/>
</div>

      <div className="vallabhi-content">

        <section>
          <h2>About Vallabhi</h2>

          <p>
            Vallabhi was an important ancient centre of learning
            located in present-day Gujarat, India.
          </p>

          <p>
            It was known for education in Buddhist studies as well
            as subjects related to administration, law and other
            areas of knowledge.
          </p>
        </section>

        <section className="facts">
          <h2>Quick Facts</h2>

          <div className="fact-grid">

            <div>
              <h3>📚</h3>
              <p>Ancient Learning Centre</p>
            </div>

            <div>
              <h3>📍</h3>
              <p>Gujarat, India</p>
            </div>

            <div>
              <h3>🧠</h3>
              <p>Wide Range of Studies</p>
            </div>

            <div>
              <h3>🏛️</h3>
              <p>Important Historical Centre</p>
            </div>

          </div>
        </section>

        <section>
          <h2>Why Vallabhi is Important</h2>

          <p>
            Vallabhi shows the rich educational tradition of western
            India and its role in spreading knowledge and learning.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Vallabhi;