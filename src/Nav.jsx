import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [button, setButton] = useState(false);

  const buttonHamburger = () => {
    setButton(!button);
  };

  return (
    <div style={{ padding: '15px', backgroundColor: 'black',}}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          position:'sticky-top'
        }}
      >
        <button
          className="hamburgerButton"
          style={{ borderRadius: '50%' }}
          onClick={buttonHamburger}
        >
          <img
            style={{ width: '70px', cursor: 'pointer' }}
            src="https://cdn-icons-png.flaticon.com/128/3388/3388823.png"
            alt="humburgecIcon"
          />
        </button>
        <div>
          <img
            style={{ width: '80px' }}
            src="https://cdn-icons-png.flaticon.com/128/15126/15126607.png"
            alt="logo"
          />
        </div>
        <ul className={`${button ? 'responsive' : 'noneResponsive'}`}>
          <li>
            <Link
              className={`${button ? 'linkResponsive' : 'linkNoneResponsive'}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${button ? 'linkResponsive' : 'linkNoneResponsive'}`}
              to="history"
            >
              History
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;