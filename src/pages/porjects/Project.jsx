import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/Nav";
import "./project.css";
import axios from "axios";
import SignleProject from "../shared/project/SignleProject";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://portfolio-strapi-mongo-server.onrender.com/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Nav />
      {loading ? (
        <h1 className="m-5 text-center">
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
      ) : (
        <div className="projects-head">
          <h1 className="m-5">
            MY <span>PROJECTS</span>
          </h1>

          <div className="projects-container container">
            {projects.map((project, i) => (
              <SignleProject key={i} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
