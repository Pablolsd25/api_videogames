import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardVideoGame = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
    
     
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Nombre</ListGroup.Item>
      <ListGroup.Item>Genero</ListGroup.Item>
    </ListGroup>
   
  </Card>  )
}

export default CardVideoGame