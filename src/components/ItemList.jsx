import React from 'react';
import Item from './Item.jsx';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ItemList(props) {
console.log(props.itemList);
  var itemListStyles = {
    padding: '0 20px'
  }

  return (
    <div style={itemListStyles}>

      <hr/>

    </div>
  );
}

  ItemList.propTypes = {
    itemList: PropTypes.array
  };

export default ItemList;


//  callback:  onNewPostCreation
//imageUrl = "https://source.unsplash.com/random/75x75"


// {props.itemList.map((post, index) =>
//     <Item text={post.text}
//       key={post.id}/>
//     )}
