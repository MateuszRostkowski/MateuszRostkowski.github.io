import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="nav-active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
