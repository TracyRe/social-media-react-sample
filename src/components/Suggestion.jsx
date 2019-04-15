import React from 'react';

function Suggestion(props) {
  const suggestionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
  const suggestionInfoStyle = {
    display: "flex",
    flexDirection: "column",
    color: "#606060"
  }
  const picStyle = {
    width: "45px",
    height: "50px",
    marginRight: "20px"
  }
  const buttonStyle = {
    backgroundColor: "#3271b8",
    border: "none",
    borderRadius: "0",
    width: "100px",
    height: "25px",
    color: "white"
  }
  return (
    <div style={suggestionStyle}>
      <img style={picStyle} src={props.imageUrl} alt="pic"/>
      <div style={suggestionInfoStyle}>
        <p>Donec eu orci et</p>
        <button style={buttonStyle}>Button</button>
      </div>
    </div>
  );
}

export default Suggestion;
