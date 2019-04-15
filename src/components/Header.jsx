import React from 'react';
import Nav from './Nav.jsx';
import Search from './Search.jsx';
import Tweet from './Tweet.jsx';

function Header() {
  const headerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "2px solid #ccc",
    marginBottom: "20px",
    paddingBottom: "10px"
  }
  const rightSideStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "400px"
  }
  return (
    <div style={headerStyles}>
      <Nav/>
      <div style={rightSideStyle}>
        <Search/>
        <Tweet/>
      </div>
    </div>
  );
}

export default Header;
