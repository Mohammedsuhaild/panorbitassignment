import React from 'react';
import './VerticalNav.css';

const VerticalNav = () => {
  return (
    <div className="vertical-nav" style={{width:"200px",height:"80%",background:"blue"}}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default VerticalNav;
