import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "./Button";
import Header from "./Header";

const MovieDetails = ({
  details: { Title, Director, Actors, Plot, Genre, Released }
}) => {
  return (
    <div className="movieDetails">
      <Header />
      <h3>Movie Details</h3>
      {Title && <p>Title: {Title}</p>}
      {Director && <p>Director: {Director}</p>}
      {Genre && <p>Genre: {Genre}</p>}
      {Actors && <p>Actors: {Actors}</p>}
      {Plot && <p>Plot: {Plot}</p>}
      {Released && <p>Released: {Released}</p>}
      <p>
        <Link to="/">
          <Button text="Go To The Result Page" />
        </Link>
      </p>
    </div>
  );
};

MovieDetails.prototype = {
  Title: PropTypes.string,
  Director: PropTypes.string,
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  Genre: PropTypes.Genre
};

export default connect(
  state => ({
    details: state.movieDetails
  }),
  null
)(MovieDetails);
