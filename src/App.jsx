import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Yellow Taxi Analytics Dashboard</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 NYC Yellow Taxi Dashboard</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
