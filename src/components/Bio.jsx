import React from 'react';

function Bio() {
  var bioStyles = {
    border: "2px solid #ccc",
    padding: "10px 20px"
  }
  return (
    <div style={bioStyles}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit duis.</p>
      <p>Id consectetur purus ut faucibus.</p>
      <p>Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Sit amet mattis vulputate enim nulla. </p>
    </div>
  );
}

export default Bio;
