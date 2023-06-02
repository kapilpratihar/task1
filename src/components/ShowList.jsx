import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ".././styles/showlist.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <h2>Show List</h2>
      <Row>
        {shows.map((show) => (
          <Col key={show.show.id} xs={12} md={6} lg={4}>
            <div className="show-card">
              <h4>{show.show.name}</h4>
              {/* <p>{show.show.summary}</p> */}
              <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowList;
