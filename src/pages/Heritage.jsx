import { Link } from "react-router-dom";
import "./Heritage.css";

function Heritage() {
  return (
    <div className="heritage-page">

      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

      {/* Hero Section */}
      <header className="heritage-hero">
        <p>INDIAN KNOWLEDGE SYSTEMS</p>
        <h1>Explore India's Ancient Heritage</h1>

        <p className="heritage-intro">
          Discover the history of ancient Indian education,
          famous learning centres and the knowledge shared
          by scholars in the past.
        </p>
      </header>

      {/* Ancient Education */}
      <section className="heritage-section">
        <h2>📚 Ancient Indian Education</h2>

        <p>
          Education was an important part of ancient Indian society.
          Students learned from teachers in different places, including
          monasteries and other learning centres. They studied subjects
          through reading, discussion, practice and debate.
        </p>

        <p>
          Students often spent time learning from experienced teachers.
          Education helped them develop knowledge, improve their thinking
          and understand the world around them. Learning methods differed
          according to the place, time and subject.
        </p>
      </section>

      {/* Famous Learning Centres */}
      <section className="heritage-section">
        <h2>🏛️ Famous Centres of Learning</h2>

        <div className="heritage-info-grid">

          <article className="heritage-info-card">
            <h3>Nalanda</h3>
            <p>
              Nalanda, in present-day Bihar, was a famous centre
              of Buddhist learning. Students studied Buddhist
              philosophy, logic, grammar and other subjects.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Takshashila</h3>
            <p>
              Takshashila was an ancient centre of learning in
              present-day Pakistan. It was known for teaching
              different subjects through teachers and their students.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Vikramashila</h3>
            <p>
              Vikramashila was an important Buddhist learning
              centre established under the Pala rulers. It became
              known for Buddhist studies and scholarship.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Vallabhi</h3>
            <p>
              Vallabhi was located in present-day Gujarat.
              It was known for Buddhist and other forms of education,
              including subjects connected with public life.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Odantapuri</h3>
            <p>
              Odantapuri was an important Buddhist learning centre
              in present-day Bihar. It was associated with the
              Pala period and the growth of Buddhist education.
            </p>
          </article>

        </div>
      </section>

      {/* Subjects */}
      <section className="heritage-section">
        <h2>🧠 Subjects and Knowledge</h2>

        <div className="heritage-info-grid">

          <article className="heritage-info-card">
            <h3>Mathematics</h3>
            <p>
              Mathematics helped people work with numbers,
              calculations, measurements and practical problems.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Medicine</h3>
            <p>
              Medical traditions included the study of health,
              the human body, medicinal plants and treatments.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Astronomy</h3>
            <p>
              Scholars observed the sky and studied the movements
              of celestial bodies and the measurement of time.
            </p>
          </article>

          <article className="heritage-info-card">
            <h3>Philosophy and Logic</h3>
            <p>
              These subjects encouraged people to ask questions,
              examine ideas and build arguments using reasoning.
            </p>
          </article>

        </div>
      </section>

      {/* Teaching Methods */}
      <section className="heritage-section">
        <h2>👨‍🏫 How Did Students Learn?</h2>

        <p>
          Students learned in different ways. Teachers explained
          ideas, students read or memorised texts, and discussions
          helped them understand difficult topics.
        </p>

        <ul className="heritage-list">
          <li><strong>Reading:</strong> Learning from books and manuscripts.</li>
          <li><strong>Discussion:</strong> Sharing ideas and asking questions.</li>
          <li><strong>Debate:</strong> Explaining and examining different views.</li>
          <li><strong>Practice:</strong> Applying knowledge to specific subjects.</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="heritage-section heritage-conclusion">
        <h2>🌏 Why Is This Heritage Important?</h2>

        <p>
          Ancient learning centres are an important part of India's
          history. They show how people studied, taught and shared
          knowledge in different periods. Their history also helps
          us understand the development of education, philosophy,
          science and cultural traditions.
        </p>

        <p>
          Studying these places helps us protect historical heritage
          and learn about the different traditions that shaped India's
          intellectual past.
        </p>
      </section>

      <footer className="heritage-footer">
        <h2>IKS Heritage</h2>
        <p>Discover India's rich tradition of knowledge and learning.</p>
        <p>© 2026 IKS Heritage | Academic Project</p>
      </footer>

    </div>
  );
}

export default Heritage;