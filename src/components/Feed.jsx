import React, { Component } from 'react';
import ItemList from './ItemList';
import Post from './Post';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    masterFeed: []
  };

  this.handleAddingNewPostsToFeed = this.handleAddingNewPostsToFeed.bind(this);
  console.log(props.onNewPostCreation);
  console.log(this.handleAddingNewPostsToFeed);
}

handleAddingNewPostsToFeed(newPost){
  var newMasterFeed = this.state.masterFeed.slice();
  newMasterFeed.push(newPost);
  this.setState({masterFeed: newMasterFeed});
}



render(){
  var feedStyles = {
    border: '2px solid #ccc'
  }
  return (
    <div style={feedStyles}>
      <Post render={() => <Post onNewPostCreation={this.props.onNewPostCreation} />} />
      <ItemList render={() => <ItemList itemList={this.state.masterFeed} />} />
    </div>
  );

  }
}

export default Feed;
