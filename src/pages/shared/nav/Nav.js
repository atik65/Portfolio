import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        <i class="fas fa-home"></i>
      </NavLink>
      <NavLink to="/about" className="nav-item">
        <i class="fas fa-user"></i>
      </NavLink>
      <NavLink to="/project" className="nav-item">
        <i class="fas fa-project-diagram"></i>
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        <i class="fas fa-envelope-open"></i>
      </NavLink>
      <a
        href="https://protfolio-site.herokuapp.com/admin"
        target="_blank"
        className="nav-item"
      >
        <i class="fas fa-cloud-upload-alt"></i>
      </a>
    </div>
  );
};

export default Nav;
