import React from 'react';
import NavButton from './NavButton';

function Nav() {
  const navStyles = {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center"
  }
  return (
    <div style={navStyles}>
      <NavButton
        text="Home"
        target="#"/>
      <NavButton
        text="Notifications"
        target="#"/>
      <NavButton
        text="Messages"
        target="#"/>
    </div>
  );
}

export default Nav;
