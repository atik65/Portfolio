import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/Nav";
import "./projectDetails.css";
import { useParams } from "react-router";
import axios from "axios";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

import ImageGallery from "react-image-gallery";

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

  // console.log(project);

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
          <div className=" mx-0 px-0">
            <div className="">
              {/* <img className="big-image" src={image} alt="" /> */}

              {/* <div className="row mx-0 px-0 mt-2">
                {images.map((image) => {
                  if (image?.url)
                    return (
                      <div
                        className="col-3 small-img"
                        onMouseMove={() => setImage(image?.url)}
                        onClick={() => setImage(image?.url)}
                      >
                        <img src={image?.url} alt="" />
                      </div>
                    );
                })}
              </div> */}

              <ImageGallery
                lazyLoad={true}
                infinite={true}
                autoPlay={true}
                slideDuration={400}
                slideInterval={3000}
                slideOnThumbnailOver={true}
                // showBullets={true}
                // showNav={false}
                // disableSwipe={false}
                items={images.map((image) => {
                  return {
                    original: image.url,
                    thumbnail: image.url,
                  };
                })}
              />
            </div>
            <div className=" ">
              <h1 className="mt-5 "> {projectName} </h1>
              <h4 className="my-3"> Category: {projectType} </h4>
              <h5> About this site-- </h5>
              <p>{projectDes}</p>

              <a target="_blank" href={liveLink}>
                <span>
                  <CgWebsite />
                </span>
                Live View
              </a>

              {clientCode && (
                <a target="_blank" href={clientCode}>
                  <span>
                    <BsCodeSlash />
                  </span>
                  Client Side Code
                </a>
              )}

              {serverCode && (
                <a target="_blank" href={serverCode}>
                  <span>
                    <BsCodeSlash />
                  </span>
                  Server side code
                </a>
              )}
            </div>

            <div className="mb-5"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PorjectsDetails;
