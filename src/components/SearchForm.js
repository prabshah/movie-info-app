import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../actions";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: localStorage.getItem("movie") || ""
    };
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState(
      {
        movie: value
      },
      () => {
        localStorage.setItem("movie", value);
        return this.props.getMovies(value);
      }
    );
  };

  render() {
    const { movie } = this.state;

    return (
      <form className="searchForm">
        <input
          type="text"
          placeholder="Insert movie name..."
          className="searchForm_input"
          name="movie"
          value={movie}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    getMovies: movie => dispatch(fetchMovies(movie))
  })
)(SearchForm);
