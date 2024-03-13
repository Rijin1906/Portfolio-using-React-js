import React from "react";
import "../src/components  /css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="container-fluid">
        <div className="inner-div">
          {" "}
          <ul className="navbar">
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
            <Link to="/skills">
              <li>SKILLS</li>
            </Link>
            <Link to="/project1">
              {" "}
              <li>PROJECT</li>
            </Link>
            <Link to="/contact">
              {" "}
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
