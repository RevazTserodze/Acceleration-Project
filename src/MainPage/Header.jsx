import React from "react";
import "./header.css"; 

import Com from "./Com";
function Header() {
  return (
    <div className="Header">
      <ul
      >
        <li className="image">
          <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg"
            alt="react"
          />
        </li>
        <li className="text">
          <h2 >
            Welcome to the Home Page
          </h2>
          <p
          >
            This is the home page of my application.
          </p>
        </li>
      </ul>
      <Com/>
    </div>
  );
}

export default Header;
