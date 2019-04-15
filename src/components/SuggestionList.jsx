import React from 'react';
import Suggestion from './Suggestion.jsx';

function SuggestionList() {
  var suggestionStyles = {
    border: "2px solid #ccc",
    padding: "10px 20px",
    color: "#606060"
  }
  return (
    <div style={suggestionStyles}>
      <p>Lorem Ipsum</p>
      <Suggestion
        imageUrl = "https://source.unsplash.com/random/75x75"/>
      <Suggestion
        imageUrl = "https://source.unsplash.com/random/75x75"/>
      <Suggestion
        imageUrl = "https://source.unsplash.com/random/75x75"/>
    </div>
  );
}

export default SuggestionList;
