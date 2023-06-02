import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ".././styles/showdetails.css";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>{show.name}</h2>
      {/* <h6>{show.type}</h6> */}
      <div>
        <h6>Type</h6>
        <ul>
          <p>{show.type}</p>
        </ul>
      </div>

      <div>
        <h6>Language</h6>
        <ul>
          <p>{show.language}</p>
        </ul>
      </div>

      <div>
        <h6>Genres:</h6>
        <ul>
          {show.genres.map((genre, index) => (
            <li key={index + 1}>{genre}</li>
          ))}
        </ul>
      </div>
      {/* <a href="show.officialSite">Official Site</a> */}
      <div>
        <h5>Summary</h5>
        <ul>
          <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
        </ul>
      </div>
      <Link
        to={`/booking/:${show.id}/${show.name}`}
        className="btn btn-primary"
      >
        Book Movie Ticket
      </Link>
    </Container>
  );
};

export default ShowDetails;
