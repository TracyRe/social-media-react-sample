import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
    const profileBoxStyle = {
      position: "relative"
    }
    const profileStyles = {

    }

    const profileTopStyle = {
      backgroundColor: "#2c97de",
      width: "100%",
      height: "120px"
    }
    const profilePicStyle = {
      backgroundColor: "#2c97de",
      width: "75px",
      height: "75px",
      border: "2px solid #fff",
      borderRadius: "25%",
      marginRight: "20px"

    }

    const profileNameStyle = {
      color: "#606060",
      fontSize: "1.2rem",
      display: "flex",
      position: "absolute",
      top: "70px",
      left: "18px",
      zIndex: "100",
      flexFlow: "row nowrap",
      alignItems: "baseline"
    }

    const profileLinksStyle = {
      border: "2px solid #ccc",
      marginBottom: "10px",
      padding: "40px 20px 20px 20px",
      textTransform: "uppercase",
      fontSize: ".85rem",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
    }


  return (
    <div style={profileBoxStyle}>
      <div style={profileTopStyle}>
        <div style={profileNameStyle}>
          <div style={profilePicStyle}></div>
          <h4>{props.user}</h4>
        </div>
      </div>
        <div style={profileLinksStyle}>
          <div>Tweets</div>
          <div>Following</div>
          <div>Followers</div>
        </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.string.isRequired
}
export default Profile;
