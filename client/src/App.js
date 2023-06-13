import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from "react";
import LandingPage from "./Components/LandingPage";
import Home from './Components/Home';
import VideogameCreate from './Components/VideogameCreate';
import Details from "./Components/Details";









function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videogame" element={<VideogameCreate />} />
          <Route path="/videogame/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;