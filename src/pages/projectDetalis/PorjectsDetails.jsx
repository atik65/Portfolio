import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/Nav";
import "./projectDetails.css";
import { useParams } from "react-router";
import axios from "axios";

const PorjectsDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://portfolio-strapi-mongo-server.onrender.com/projects/${id}`)
      .then((res) => {
        setProject(res.data);
        setLoading(false);
        setImage(res.data.images[0]?.url);
      })
      .catch((erro) => {
        console.log(erro.message);
        setLoading(false);
      });
  }, []);

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
      <Nav />

      <div className="projectDetails-head">
        <h1 className="m-5">
          PROJECT <span> DETAILS </span>
        </h1>
      </div>

      {loading ? (
        <h1 className="m-5 text-center">
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
      ) : (
        <div className="container projectDetails">
          <div className="row mx-0 px-0">
            <div className="col-md-6">
              <img className="big-image" src={image} alt="" />

              <div className="row mx-0 px-0 mt-2">
                {images.map((image) => {
                  return (
                    <div
                      className="col-3 small-img"
                      onClick={() => setImage(image?.url)}
                    >
                      <img src={image?.url} alt="" />{" "}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2> {projectName} </h2>
              <h4 className="my-3"> Category: {projectType} </h4>
              <h5> About this site-- </h5>
              <p>{projectDes}</p>

              <a target="_blank" href={liveLink}>
                Live View
              </a>

              <a target="_blank" href={clientCode}>
                Client Side Code
              </a>

              <a target="_blank" href={serverCode}>
                Server side code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PorjectsDetails;
