import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMovies } from "../actions";

class SearchForm extends Component {
  static get propTypes() {
    return { getMovies: PropTypes.func.isRequired };
  }

  static defaultProps = {
    getMovies: () => {}
  };

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
  { getMovies: fetchMovies }
)(SearchForm);
