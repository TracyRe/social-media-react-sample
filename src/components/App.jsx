import React from 'react';
import Header from './Header.jsx';
import Profile from './Profile.jsx';
import Bio from './Bio.jsx';
import Feed from './Feed.jsx';
import SuggestionList from './SuggestionList.jsx';

function App() {
  var bodyStyles = {
    display: "grid",
    gridTemplateColumns:"300px auto 250px",
    gridColumnGap: "10px"
  }
  var textStyle = {
    fontFamily: "Helvetica",
    color: "#a2a2a2"
  }
  return (
    <div style={textStyle}>
      <Header/>
      <div style={bodyStyles}>
        <div>
          <Profile
            user = "Travis Toal"/>
          <Bio/>
        </div>
        <Feed/>
        <div>
          <SuggestionList/>
        </div>
      </div>
    </div>
  );
}

export default App;
