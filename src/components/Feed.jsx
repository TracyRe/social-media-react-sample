import React from 'react';
import ItemList from './ItemList';
import Post from './Post';

function Feed() {
    var feedStyles = {
      border: "2px solid #ccc"
    }
  return (
    <div style={feedStyles}>
      <Post/>
      <ItemList/>
    </div>
  );
}

export default Feed;
