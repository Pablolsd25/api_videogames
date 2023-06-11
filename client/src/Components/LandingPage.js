import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/LandingPage.css';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="card-container">
        <Card className="text-center bg-dark text-white">
          <Card.Header>BIENVENIDOS</Card.Header>
          <Card.Body>
            <Card.Title>¿Qué es juegopedia?</Card.Title>
            <Card.Text>
              Juego pedia es una API REST desarrollada con tecnologías como React, Redux, Node y Sequelize con postgraceSql. Donde puedes consultar información sobre tu videojuego favorito, además de agregar juegos que no estén.
            </Card.Text>
            <Link to="/home">
              <Button variant="primary">Buscar</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
