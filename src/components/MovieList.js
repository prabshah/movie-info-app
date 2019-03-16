import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { fetchMovieDetails } from "../actions/index";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies = [], getMoveDetail, isLoading }) => {
  const renderMovieList = data => {
    if (data.length === 0) {
      return (
        <li className="movieList_item">
          <i>{isLoading ? "Loading.." : "No movies to show."}</i>
        </li>
      );
    } else {
      return data.map(item => {
        const { imdbID: id } = item;

        return (
          <Link to="/movie-details" key={id}>
            <MovieListItem {...item} onClick={() => getMoveDetail(id)} />
          </Link>
        );
      });
    }
  };

  return <ul className="movieList">{renderMovieList(movies)}</ul>;
};

MovieList.prototype = {
  movies: PropTypes.array.isRequired,
  getMoveDetail: PropTypes.object.isRequired
};

export default connect(
  ({ movieList, isLoading }) => ({
    movies: movieList,
    isLoading
  }),
  { getMoveDetail: fetchMovieDetails }
)(MovieList);
