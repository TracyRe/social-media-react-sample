import React from 'react';

function Post() {
  const postStyle = {
    backgroundColor: "#a6d8f1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    width: "100%"
  }
  const profStyle = {
    backgroundColor: "#740504",
    width: "30px",
    height: "30px"
  }
  const inputStyle = {
    width: "70%",
    height: "40px",
    border: "2px solid #00b3f2",
    paddingLeft: "20px"
  }
  return (
    <div style={postStyle}>
      <div style={profStyle}></div>
      <input style={inputStyle} placeholder="What's happening?"/>
    </div>
  );
}

export default Post;
