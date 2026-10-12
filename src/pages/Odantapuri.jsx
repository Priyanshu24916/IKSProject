import { Link } from "react-router-dom";
import "./Odantapuri.css";

function Odantapuri() {
  return (
    <div className="odantapuri-page">

      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

<div className="odantapuri-hero">
  <p>ANCIENT CENTRE OF LEARNING</p>

  <h1>Odantapuri</h1>

  <span>📍 Bihar, India</span>

  <div className="odantapuri-hero-content">
    <div className="odantapuri-hero-text">
      <h2>A Great Seat of Buddhist Learning</h2>

      <p>
        Odantapuri was one of the important Buddhist
        learning centres of ancient India. It became
        known for Buddhist teachings, philosophy and
        the spread of knowledge.
      </p>

      <div className="hero-line"></div>
    </div>

    <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/Ancient_Monasteries_Bihar_Sharif.jpg"
  alt="Ancient monastery ruins at Bihar Sharif"
  className="odantapuri-image"
/>
  </div>
</div>



      <div className="odantapuri-content">

        <section>
          <h2>About Odantapuri</h2>

          <p>
            Odantapuri was an important Buddhist centre of learning
            located in present-day Bihar, India. It was established
            during the Pala period and became an important place
            for Buddhist education.
          </p>

          <p>
            Monks and students studied Buddhist teachings,
            philosophy and other subjects. Odantapuri was part
            of the rich educational tradition of ancient India.
          </p>

          <p>
            Along with Nalanda and Vikramashila, Odantapuri played
            an important role in the history of Buddhist learning.
            Although much of its original structure has disappeared,
            its historical importance remains significant.
          </p>
        </section>
        <section className="odantapuri-history">
  <h2>History of Odantapuri</h2>

  <p>
    Odantapuri was an important centre of education in ancient
    India. It was located in the area of present-day Bihar Sharif
    in Bihar. It became famous during the rule of the Pala kings.
  </p>

  <p>
    Odantapuri is believed to have been established by King Gopala
    of the Pala dynasty during the 8th century CE. It was mainly
    a Buddhist monastery where monks lived, studied and taught
    Buddhist ideas.
  </p>

  <p>
    Students came to Odantapuri to learn about Buddhism,
    philosophy and other subjects. Teachers helped students
    understand religious ideas and develop their knowledge.
    The centre played an important role in the growth of
    Buddhist education in eastern India.
  </p>

  <p>
    Odantapuri was connected with other famous learning centres,
    including Nalanda and Vikramashila. Together, these centres
    helped make Bihar an important region for education and
    Buddhist learning.
  </p>

  <p>
    Odantapuri continued to be remembered as an important
    educational centre during the early medieval period.
    However, it was eventually destroyed during the period of
    military invasions in the late 12th century. Very little
    of the original institution survives today.
  </p>

  <p>
    Even though its buildings have mostly disappeared,
    Odantapuri remains an important part of India's educational
    history. It reminds us that ancient India had organised
    centres where people gathered to study, teach and share
    knowledge.
  </p>
</section>

        <section className="facts">
          <h2>Quick Facts</h2>

          <div className="fact-grid">

            <div>
              <h3>📚</h3>
              <p>Buddhist Learning Centre</p>
            </div>

            <div>
              <h3>🏛️</h3>
              <p>Established During Pala Period</p>
            </div>

            <div>
              <h3>📍</h3>
              <p>Bihar, India</p>
            </div>

            <div>
              <h3>🧠</h3>
              <p>Centre of Buddhist Studies</p>
            </div>

          </div>
        </section>

        <section>
          <h2>Why Odantapuri is Important</h2>

          <p>
            Odantapuri represents India's ancient tradition of
            education and Buddhist scholarship. Its history helps
            us understand how learning centres supported the spread
            of knowledge across different regions.
          </p>
        </section>

      </div>

      <footer className="odantapuri-footer">
        <h2>IKS Heritage</h2>
        <p>Discover India's rich tradition of knowledge and learning.</p>
        <p>© 2026 IKS Heritage | Academic Project</p>
      </footer>

    </div>
  );
}

export default Odantapuri;