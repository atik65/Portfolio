import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/Nav";
import "./project.css";
import axios from "axios";
import SignleProject from "../shared/project/SignleProject";
import { AiFillGithub } from "react-icons/ai";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      // .get("https://portfolio-strapi-mongo-server.onrender.com/projects")
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

  if (!loading && projects.length === 0) {
    return (
      <div>
        <Nav />
        <h1 className="m-5 text-center"> No projects found</h1>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      {loading ? (
        <div className="m-5 text-center">
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <p
            style={{
              fontSize: "1.5rem",
            }}
            className="text-center mt-5 px-5 py-3"
          >
            Please wait while we are fetching the projects from the server.
          </p>

          <p
            style={{
              // backgroundColor: "#f3858545",
              backgroundColor: "#fee2e2",
              borderRadius: "20px",
              width: "fit-content",
              fontSize: "1.4rem",
            }}
            className="text-center  mt-3 p-3"
          >
            We are using free server so it may take some time. It may needs
            maximum 1 minute to load the projects for the first time.
          </p>
          <p
            style={{
              // backgroundColor: "#f3858545",
              backgroundColor: "#f2fee2",
              borderRadius: "20px",
              width: "fit-content",
              fontSize: "1.2rem",
            }}
            className="text-center  mt-3 p-3"
          >
            otherwise, please check my
            <a
              style={{
                textDecoration: "none",
              }}
              className="px-2 mx-2 "
              href="https://github.com/atik65"
            >
              <AiFillGithub className="me-1" />
              Github
            </a>
            profile to see the projects.
          </p>
        </div>
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
