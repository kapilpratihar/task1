import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {shows.map((show) => (
          <li key={shows.show.id}>
            <Link to={`/show/${shows.show.id}`}>{shows.show.name}</Link>
            <p>{shows.show.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
