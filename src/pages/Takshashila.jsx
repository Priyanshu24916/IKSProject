import { Link } from "react-router-dom";
import "./Takshashila.css";

function Takshashila() {
  return (
    <div className="takshashila-page">
        <Link to="/" className="back-button">
  ← Back to Home
</Link>

      <div className="takshashila-hero">
        <p>ANCIENT CENTRE OF LEARNING</p>

        <h1>Takshashila</h1>

        <span>📍 Gandhara, Ancient India</span>
        

        <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/Jaulian07.jpg"
  alt="Ancient Takshashila ruins"
  className="takshashila-image"
/>
</div>

      <div className="takshashila-content">

        <section>
          <h2>About Takshashila</h2>

          <p>
            Takshashila was an ancient centre of learning located in
            the region of Gandhara. It was an important place for
            education, knowledge and cultural exchange.
          </p>

          <p>
            Students came from different regions to learn from
            experienced teachers and scholars.
          </p>
        </section>

        <section className="facts">
          <h2>Quick Facts</h2>

          <div className="fact-grid">

            <div>
              <h3>📚</h3>
              <p>Ancient Centre of Learning</p>
            </div>

            <div>
              <h3>🌏</h3>
              <p>Students from Different Regions</p>
            </div>

            <div>
              <h3>🧠</h3>
              <p>Many Fields of Knowledge</p>
            </div>

            <div>
              <h3>🏛️</h3>
              <p>Important Historical Site</p>
            </div>

          </div>
        </section>

        <section>
          <h2>Why Takshashila is Important</h2>

          <p>
            Takshashila represents the rich tradition of learning
            and knowledge in ancient India. It played an important
            role in the development and exchange of ideas.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Takshashila;