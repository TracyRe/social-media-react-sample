import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function Post(props) {
  let _post =null;

  function handleNewPost(event) {
    console.log(_post.value);
    console.log(this.props);
    console.log('hello');
  //  event.preventDefault();
    props.onNewPostCreation({post: _post.value, id: v4()});
    _post.value = '';
    console.log(props.onNewPostCreation);
  }

  const postStyle = {
    backgroundColor: '#a6d8f1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60px',
    width: '100%'
  }
  const profStyle = {
    backgroundColor: '#740504',
    width: '30px',
    height: '30px'
  }
  const inputStyle = {
    width: '70%',
    height: '40px',
    border: '2px solid #00b3f2',
    paddingLeft: '20px'
  }

  return (
    <div style={postStyle}>
      <div style={profStyle}></div>

      <form>
        <input style={inputStyle} placeholder='What&apos;s happening?' type='text'
        ref={(input) => {_post = input;}}/>
      <button onClick={handleNewPost} type='submit'>Post</button>
      </form>
    </div>
  );
}

Post.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default Post;
