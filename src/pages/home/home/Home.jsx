import React, { useEffect, useState } from "react";
import Nav from "../../shared/nav/Nav";
import "./home.css";
import bg from "../../../images/bg.png";
import axios from "axios";
import atik from "../../../images/atik_profile.png";

const Home = () => {
  const [profileImg, setProfileImg] = useState({});

  useEffect(() => {
    axios
      .get("https://portfolio-strapi-mongo-server.onrender.com/profile-img")
      .then((res) => {
        setProfileImg(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="row mx-0 px-0">
          <div className="col-lg-5 home-left px-0">
            <div className="home-left-bg">
              <img src={bg} alt="" />
            </div>
            <div className="profile-image">
              <img src={atik} alt="" />
            </div>
          </div>
          <div className="col-lg-7 home-right">
            <h1 className="name"> --- I'M ATIK HASAN.</h1>
            <h1 className="title"> FRONTEND WEB DEV </h1>
            <p className="intro-text">
              I am a highly skilled frontend web developer with expertise in
              JavaScript, React.js, Next.js, Redux, Zustand, Jotai, Tailwind
              CSS, Material-UI, and more. I am also proficient in backend
              technologies such as Node.js, Express.js, Firebase, MongoDB, and
              MySQL. With a strong foundation in HTML, CSS, and Bootstrap, I
              excel at building single-page applications and delivering seamless
              user experiences. Additionally, my knowledge extends to languages
              like C++ and Java, along with a solid understanding of
              object-oriented programming and data structures. Comfortable
              working with Ubuntu and Nginx, I am well-versed in version control
              using Git.
            </p>
            {/* <p className="intro-text">
              I am a frontend web developer . Expert in JavaScript, React ,
              Firebase Authentication, React Hooks, Context API, HTML 5, CSS 3,
              Bootstrap 4, Git and GitHub and familiar with Node.js, Express.js,
              MongoDB, Tailwind CSS and Meaterial-UI and very much comfortable
              with building single page applications using React.js .
            </p> */}

            <a
              href="https://drive.google.com/file/d/1GeOtkQ3clz6SUd6lsFX-eLJ4nzerkT4G/view?usp=sharing"
              // href="https://drive.google.com/u/1/uc?id=1GeOtkQ3clz6SUd6lsFX-eLJ4nzerkT4G&export=download"
              target="_blank"
              className="resume-button"
            >
              <span> DOWNLOAD RESUME</span>
              <div className="resume-after">
                <span> DOWNLOAD RESUME </span>
                <i className="fas fa-arrow-right    "></i>
              </div>
            </a>
          </div>
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Home;
