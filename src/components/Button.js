import React from "react";
import PropTypes from "prop-types";

const Button = ({ text = "Button", type = "button" }) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Button;
