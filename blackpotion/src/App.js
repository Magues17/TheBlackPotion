import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Games from "./Games";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="navbar-brand">Black Potion</div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/menu">
                  Menu
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/games">
                  Games
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/games" element={<Games />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
