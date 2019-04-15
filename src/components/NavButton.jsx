import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
  const navButtonStyles = {
  }
  const anchorStyle = {
    textDecoration: "none",
    color: "#606060",
    border: "2px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderCollapse: "collapse",
    height: "40px",
    padding: "0px 20px"
  }
  return (
    <a style={anchorStyle} href={props.target}>
      <p>{props.text}</p>
    </a>
  );
}

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired
}

export default NavButton;
