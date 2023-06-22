import React from "react";
import { NavLink } from "react-router-dom";
import "./singleProject.css";

import { AiOutlineZoomIn } from "react-icons/ai";

const SignleProject = ({ project }) => {
  const {
    liveLink,
    clientCode,
    serverCode,
    projectName,
    projectDes,
    projectType,
    images,
    _id,
  } = project;

  return (
    <div>
      <div className="singleProject">
        <img src={images[0]?.url} alt="" />

        <NavLink to={`/projects/${_id}`} className="single-project-after">
          <h5>{projectName}</h5>
          <h5>{projectType} site</h5>
          <button>
            {" "}
            <AiOutlineZoomIn /> Explore{" "}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignleProject;
