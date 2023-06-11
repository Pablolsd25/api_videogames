import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Aquí puedes agregar cualquier otro contenido que desees mostrar en tu aplicación */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;