import React from 'react';

function Search() {
  const searchStyle = {
    border: "2px solid #339bde",
    width: "225px",
    height: "30px",
    borderRadius: "30px",
    paddingLeft: "25px"
  }
  return (
    <div>
      <input style={searchStyle} placeholder="Search"/>
    </div>
  );
}

export default Search;
