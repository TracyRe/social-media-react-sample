import React from 'react';
import Item from './Item.jsx';

function ItemList() {
  var itemListStyles = {
    padding: "0 20px"
  }
  return (
    <div style={itemListStyles}>
      <Item
        imageUrl = "https://source.unsplash.com/random/75x75"
        name = "Lorem Ipsum"
        content = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nullam"/>
      <hr/>
      <Item
        imageUrl = "https://source.unsplash.com/random/75x75"
        name = "Lorem Ipsum"
        content = "Lorem Ipsum dolor sit amet, consectetur"/>
      <hr/>
      <Item
        imageUrl = "https://source.unsplash.com/random/75x75"
        name = "Lorem Ipsum"
        content = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
      <hr/>
      <Item
        imageUrl = "https://source.unsplash.com/random/75x75"
        name = "Lorem Ipsum"
        content = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
      <hr/>
      <Item
        imageUrl = "https://source.unsplash.com/random/75x75"
        name = "Lorem Ipsum"
        content = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
      <hr/>
      <Item
        imageUrl = "https://source.unsplash.com/random/75x75"
        name = "Lorem Ipsum"
        content = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
      <hr/>
    </div>
  );
}

export default ItemList;
