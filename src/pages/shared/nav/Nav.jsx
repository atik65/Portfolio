import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="homeNav" to="/">
        <i className="fas fa-home"></i>
      </NavLink>
      <NavLink to="/about" className="nav-item about">
        <i className="fas fa-user"></i>
      </NavLink>
      <NavLink to="/project" className="nav-item projects">
        <i className="fas fa-project-diagram"></i>
      </NavLink>
      <NavLink to="/contact" className="nav-item contact">
        <i className="fas fa-envelope-open"></i>
      </NavLink>
      <a
        href="https://portfolio-strapi-mongo-server.onrender.com/admin"
        target="_blank"
        className="nav-item admin"
      >
        <i className="fas fa-cloud-upload-alt"></i>
      </a>
    </div>
  );
};

export default Nav;
