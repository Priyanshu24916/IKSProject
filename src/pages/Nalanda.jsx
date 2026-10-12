
import "./Nalanda.css";
import { Link } from "react-router-dom";

function Nalanda() {
  return (
    <div className="nalanda-page">
        <Link to="/" className="back-button">
  ← Back to Home
</Link>

      <div className="nalanda-hero">
  <p>ANCIENT CENTRE OF LEARNING</p>

  <h1>Nalanda</h1>

  <span>📍 Bihar, India</span>
<img
  src="https://upload.wikimedia.org/wikipedia/commons/1/10/Archeological_Ruins_of_Nalanda_Mahavihara.jpg"
  alt="Ancient Nalanda ruins"
  className="nalanda-image"
/>
    
</div>

      <div className="nalanda-content">

       <section className="history-section">
  <div className="history-heading">
    <p>THE JOURNEY</p>
    <h2>History of Nalanda</h2>
  </div>

  <div className="history-content">
    <p>
      Nalanda was an ancient centre of learning located in present-day
      Bihar, India. It became one of the most famous places of education
      in ancient India.
    </p>

    <p>
      Students and teachers from different parts of India and Asia came
      to Nalanda to study. Subjects included Buddhism, philosophy,
      logic, medicine, mathematics and languages.
    </p>

    <p>
      Nalanda was known for its large monasteries, libraries and
      peaceful learning environment. It became an important centre for
      sharing knowledge and ideas.
    </p>

    <p>
      Even today, the ruins of Nalanda remind us of India's rich
      tradition of education and knowledge.
    </p>
  </div>
</section>
<section className="subjects-section">
  <div className="subjects-heading">
    <p>KNOWLEDGE</p>
    <h2>Subjects & Learning</h2>
    <span>Many areas of knowledge were studied at Nalanda.</span>
  </div>

  <div className="subjects-grid">
    <div className="subject-card">
      <span>📚</span>
      <h3>Buddhism</h3>
      <p>Study of Buddhist teachings, ideas and philosophy.</p>
    </div>

    <div className="subject-card">
      <span>🧠</span>
      <h3>Philosophy</h3>
      <p>Students learned about ideas, thinking and different philosophies.</p>
    </div>

    <div className="subject-card">
      <span>⚕️</span>
      <h3>Medicine</h3>
      <p>Knowledge of health, treatment and traditional medicine was studied.</p>
    </div>

    <div className="subject-card">
      <span>🔢</span>
      <h3>Mathematics</h3>
      <p>Students studied numbers, calculations and mathematical ideas.</p>
    </div>

    <div className="subject-card">
      <span>🌐</span>
      <h3>Languages</h3>
      <p>Languages and literature were important parts of learning.</p>
    </div>

    <div className="subject-card">
      <span>⚖️</span>
      <h3>Logic</h3>
      <p>Students learned reasoning, debate and logical thinking.</p>
    </div>
  </div>
</section>
<section className="scholars-section">
  <div className="scholars-heading">
    <p>GREAT MINDS</p>
    <h2>Famous Scholars</h2>
    <span>Nalanda was connected with many great scholars and teachers.</span>
  </div>

  <div className="scholars-grid">
    <div className="scholar-card">
      <div className="scholar-icon">👨‍🏫</div>
      <h3>Xuanzang</h3>
      <p>
        A famous Chinese Buddhist monk who studied at Nalanda and
        wrote about his experiences in India.
      </p>
    </div>

    <div className="scholar-card">
      <div className="scholar-icon">📖</div>
      <h3>Shantarakshita</h3>
      <p>
        A respected Buddhist scholar and teacher associated with the
        great tradition of Nalanda.
      </p>
    </div>

    <div className="scholar-card">
      <div className="scholar-icon">🧠</div>
      <h3>Dharmapala</h3>
      <p>
        A well-known Buddhist scholar who played an important role in
        the development of Nalanda's academic tradition.
      </p>
    </div>
  </div>
</section>

<section className="timeline-section">
  <div className="timeline-heading">
    <p>THROUGH THE YEARS</p>
    <h2>Nalanda Timeline</h2>
    <span>A quick journey through the history of Nalanda.</span>
  </div>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-year">5th Century</div>
      <div className="timeline-card">
        <h3>Foundation of Nalanda</h3>
        <p>
          Nalanda developed into an important centre of learning
          during the Gupta period.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-year">7th Century</div>
      <div className="timeline-card">
        <h3>Growth of Knowledge</h3>
        <p>
          Nalanda became a major centre for Buddhist studies,
          philosophy and other subjects.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-year">7th Century</div>
      <div className="timeline-card">
        <h3>Xuanzang Visits Nalanda</h3>
        <p>
          The Chinese scholar Xuanzang studied at Nalanda and
          recorded valuable information about the institution.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-year">12th Century</div>
      <div className="timeline-card">
        <h3>Decline of Nalanda</h3>
        <p>
          Nalanda gradually declined and its great learning
          tradition came to an end.
        </p>
      </div>
    </div>

  </div>
</section>


      <section className="timeline-section">
  <h2>Nalanda Timeline</h2>

  <div className="timeline">
    <div className="timeline-item">
      <h3>5th Century</h3>
      <p>Nalanda started as an important place for learning.</p>
    </div>

    <div className="timeline-item">
      <h3>Gupta Period</h3>
      <p>Nalanda grew with the support of kings.</p>
    </div>

    <div className="timeline-item">
      <h3>7th Century</h3>
      <p>Many students and teachers came to Nalanda from different places.</p>
    </div>

    <div className="timeline-item">
      <h3>Later Period</h3>
      <p>Nalanda slowly lost its importance as a learning centre.</p>
    </div>
  </div>
</section>
<div className="gallery-grid">
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Nalanda%20Ruins%20(1).jpg"
    alt="Nalanda University Ruins"
  />

  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Nalanda%20Ruins%20(48).jpg"
    alt="Nalanda Ruins"
  />

  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Ruins%20of%20Nalanda.jpg"
    alt="Ruins of Nalanda"
  />
</div>
<section className="sources-section">
  <div className="sources-heading">
    <p>REFERENCES</p>
    <h2>Sources & References</h2>
    <span>Information used for this educational portal.</span>
  </div>

  <div className="sources-list">
    <div className="source-card">
      <h3>🏛️ UNESCO</h3>
      <p>
        Information about the historical importance of Nalanda
        Mahavihara.
      </p>
    </div>

    <div className="source-card">
      <h3>📚 Encyclopaedia Britannica</h3>
      <p>
        Historical information about Nalanda and its educational
        tradition.
      </p>
    </div>

    <div className="source-card">
      <h3>🌐 Wikimedia Commons</h3>
      <p>
        Historical photographs of the archaeological remains of Nalanda.
      </p>
    </div>
  </div>
</section>
<footer className="nalanda-footer">
  <h2>IKS Heritage</h2>

  <p>
    Exploring India's ancient centres of learning and preserving
    our rich knowledge heritage.
  </p>

  <div className="footer-line"></div>

  <p className="copyright">
    © 2026 IKS Heritage | Academic Project
  </p>
</footer>
        <section className="facts">
          <h2>Quick Facts</h2>

          <div className="fact-grid">

            <div>
              <h3>📚</h3>
              <p>Major Centre of Learning</p>
            </div>

            <div>
              <h3>🏛️</h3>
              <p>Ancient Residential University</p>
            </div>

            <div>
              <h3>🌏</h3>
              <p>International Scholars</p>
            </div>

            <div>
              <h3>📖</h3>
              <p>Many Fields of Knowledge</p>
            </div>

          </div>
        </section>

        <section>
          <h2>Why Nalanda is Important</h2>

          <p>
            Nalanda represents India's long tradition of organised
            education, scholarship and knowledge sharing. Its legacy
            continues to be an important part of India's educational
            heritage.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Nalanda;