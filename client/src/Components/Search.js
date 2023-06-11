import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Search = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container style={{ maxWidth: '400px' }}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Search;
