import React from "react";
import PropTypes from "prop-types";

const MovieListItem = ({ Title, Year, onClick }) => {
  return (
    <li
      className="movieList_item"
      onClick={onClick}
    >{`${Title} | Year: ${Year}`}</li>
  );
};

MovieListItem.propTypes = {
  Title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

export default MovieListItem;
