import { Link } from "react-router-dom";
import "./Vikramashila.css";

function Vikramashila() {
  return (
    <div className="vikramashila-page">
        <Link to="/" className="back-button">
  ← Back to Home
</Link>

      <div className="vikramashila-hero">
        <p>ANCIENT CENTRE OF LEARNING</p>

        <h1>Vikramashila</h1>

        <span>📍 Bihar, India</span>

       <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/Vikramshila%20ruins.jpg"
  alt="Ancient Vikramashila ruins"
  className="vikramashila-image"
/>
</div>

      <div className="vikramashila-content">

        <section>
          <h2>About Vikramashila</h2>

          <p>
            Vikramashila was an important Buddhist centre of learning
            established during the Pala period in present-day Bihar.
          </p>

          <p>
            It became well known for advanced studies in Buddhist
            philosophy, logic and other areas of knowledge.
          </p>
        </section>

        <section className="facts">
          <h2>Quick Facts</h2>

          <div className="fact-grid">

            <div>
              <h3>📚</h3>
              <p>Major Buddhist Centre</p>
            </div>

            <div>
              <h3>🏛️</h3>
              <p>Founded During Pala Period</p>
            </div>

            <div>
              <h3>🧠</h3>
              <p>Advanced Learning</p>
            </div>

            <div>
              <h3>📍</h3>
              <p>Bihar, India</p>
            </div>

          </div>
        </section>

        <section>
          <h2>Why Vikramashila is Important</h2>

          <p>
            Vikramashila represents India's rich tradition of Buddhist
            education and scholarship. It played an important role in
            spreading knowledge beyond India.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Vikramashila;