import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page imports
import LandingPage from "./Pages/LandingPage";
import GamePage from "../src/Pages/GamePage";
import LoginSignupPage from "./Pages/LoginSignupPage";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/landing/:player" element={<LandingPage />} />
        <Route path="/game/:player/:game" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;