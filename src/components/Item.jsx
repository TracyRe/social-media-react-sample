import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const itemStyles = {
    display: "flex",
    flexDirection: "row",
    padding: "10px 5px 20px 5px",
    alignItems: "flex-start"
  }
  const picStyle = {
    width: "40px",
    height: "40px",
    marginRight: "20px"
  }
  const contentStyle = {
    marginTop: "0px",
    color: "#606060"
  }
  return (
    <div style={itemStyles}>
      <img style={picStyle} src={props.imageUrl} alt="pic"/>
      <div >
        <p style={contentStyle}><strong>{props.name}</strong></p>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Item;
