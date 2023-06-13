import { BrowserRouter as Router, Route} from "react-router-dom";
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
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videogame" element={<VideogameCreate />} />
        <Route path="/videogame/:id" element={<Details />} />
      </div>
    </Router>
  );
}

export default App;