import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const { name } = useParams();
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  //   const [show, setShow] = useState(null);

  //   useEffect(() => {
  //     fetch(`https://api.tvmaze.com/shows/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => setShow(data))
  //       .catch((error) => console.error(error));
  //   }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store user details in local storage or perform other desired actions
    localStorage.setItem("userDetails", JSON.stringify({ name, email }));
    // Redirect to another page or perform other desired actions
  };

  //   if (!show) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <Container>
      <h2>Booking Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="uname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={uname}
            onChange={(event) => setUname(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie Name</Form.Label>
          <Form.Control type="text" value={name} readOnly />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
