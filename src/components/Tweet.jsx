import React from 'react';

function Tweet() {
  const tweetStyle = {
    border: "2px solid #339bde",
    width: "100px",
    height: "30px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={tweetStyle}>
      <p>Tweet</p>
    </div>
  );
}

export default Tweet;
