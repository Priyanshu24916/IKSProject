import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Heritage from "./pages/Heritage";
import Nalanda from "./pages/Nalanda";
import Takshashila from "./pages/Takshashila";
import Vikramashila from "./pages/Vikramashila";
import Vallabhi from "./pages/Vallabhi";
import Odantapuri from "./pages/Odantapuri";
function Home() {
  return (
    <div>
      <nav className="navbar">
        <h2>IKS Heritage</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#centres">Centres</a>
          <a href="#timeline">Timeline</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">INDIAN KNOWLEDGE SYSTEM</p>

          <h1>
            Ancient Centres of
            <br />
            <span>Learning in India</span>
          </h1>

          <p>
            Explore the rich history, knowledge and legacy of India's
            ancient centres of learning.
          </p>

      <Link to="/heritage" className="explore-button">
  Explore Heritage →
</Link>
        </div>
      </section>
            {/* Explore Heritage Details */}
      <section className="heritage-details" id="heritage-details">
        <div className="section-heading">
          <p>OUR HERITAGE</p>
          <h2>Explore India's Ancient Knowledge</h2>
          <span>
            Learn how ancient India became an important place for education,
            research and the sharing of knowledge.
          </span>
        </div>

        <div className="heritage-grid">
          <div className="heritage-card">
            <div className="heritage-icon">📚</div>
            <h3>Ancient Education</h3>
            <p>
              In ancient India, students learned from teachers in
              monasteries, schools and other learning centres. They
              studied through reading, discussion, practice and debate.
            </p>
          </div>

          <div className="heritage-card">
            <div className="heritage-icon">🏛️</div>
            <h3>Famous Learning Centres</h3>
            <p>
              Nalanda, Takshashila, Vikramashila, Vallabhi and
              Odantapuri were important centres of learning. Students
              and scholars visited these places to gain knowledge.
            </p>
          </div>

          <div className="heritage-card">
            <div className="heritage-icon">🧠</div>
            <h3>Subjects & Knowledge</h3>
            <p>
              Students studied subjects such as philosophy, grammar,
              medicine, mathematics, logic and Buddhist teachings.
              The subjects varied from one learning centre to another.
            </p>
          </div>

          <div className="heritage-card">
            <div className="heritage-icon">🌏</div>
            <h3>Cultural Heritage</h3>
            <p>
              These learning centres helped people share ideas,
              traditions and knowledge. Their history shows the
              importance of education in ancient Indian society.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Centres */}
      <section className="centres" id="centres">
        <div className="section-heading">
          <p>EXPLORE</p>

          <h2>Ancient Centres of Learning</h2>

          <span>
            Discover the history and knowledge of India's great learning
            centres.
          </span>
        </div>

        <div className="centre-grid">

          {/* Nalanda */}
          <div className="centre-card">
            <div className="centre-image nalanda">
              <span>🏛️</span>
            </div>

            <div className="centre-content">
              <h3>Nalanda</h3>

              <p className="location">📍 Bihar, India</p>

              <p>
                One of the world's earliest residential universities and
                a major centre of learning in ancient India.
              </p>

              <Link to="/nalanda" className="explore-button">
                Explore More →
              </Link>
            </div>
          </div>

          {/* Takshashila */}
          <div className="centre-card">
            <div className="centre-image takshashila">
              <span>📚</span>
            </div>

            <div className="centre-content">
              <h3>Takshashila</h3>

              <p className="location">
                📍 Gandhara, Ancient India
              </p>

              <p>
                An ancient centre of higher learning known for subjects
                such as medicine, politics, philosophy and military science.
              </p>

              <Link to="/takshashila" className="explore-button">
  Explore More →
</Link>
            </div>
          </div>

          {/* Vikramashila */}
          <div className="centre-card">
            <div className="centre-image vikramashila">
              <span>🏛️</span>
            </div>

            <div className="centre-content">
              <h3>Vikramashila</h3>

              <p className="location">📍 Bihar, India</p>

              <p>
                A famous Buddhist learning centre established during the
                Pala period and known for advanced studies.
              </p>

             <Link to="/vikramashila" className="explore-button">
  Explore More →
</Link>
            </div>
          </div>

          {/* Vallabhi */}
          <div className="centre-card">
            <div className="centre-image vallabhi">
              <span>📖</span>
            </div>

            <div className="centre-content">
              <h3>Vallabhi</h3>

              <p className="location">📍 Gujarat, India</p>

              <p>
                An important ancient centre of education, especially known
                for secular and Buddhist studies.
              </p>

              <Link to="/vallabhi" className="explore-button">
  Explore More →
</Link>
            </div>
          </div>

          {/* Odantapuri */}
          <div className="centre-card">
            <div className="centre-image odantapuri">
              <span>🏛️</span>
            </div>

            <div className="centre-content">
              <h3>Odantapuri</h3>

              <p className="location">📍 Bihar, India</p>

              <p>
                An important Buddhist monastery and learning centre
                associated with the Pala period.
              </p>

              <Link to="/odantapuri" className="explore-button">
  Explore More →
</Link>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>Discover India's Knowledge Heritage</h2>

        <p>
          Journey through the history of ancient institutions such as
          Nalanda, Takshashila, Vikramashila, Vallabhi and Odantapuri.
        </p>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/nalanda" element={<Nalanda />} />
        <Route path="/takshashila" element={<Takshashila />} />
        <Route path="/vikramashila" element={<Vikramashila />} />
        <Route path="/vallabhi" element={<Vallabhi />} />
        <Route path="/odantapuri" element={<Odantapuri />} />
        <Route path="/heritage" element={<Heritage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;