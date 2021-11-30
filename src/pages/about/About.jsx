import React from "react";
import Nav from "../shared/nav/Nav";
import "./about.css";

const About = () => {
  return (
    <div>
      <Nav />

      <div className="about-head m-5">
        <h1 className="text-center ">
          ABOUT <span>ME</span>
        </h1>
      </div>

      <div className="container ">
        <div className="row mx-0 px-0">
          <div className="col-md-6 personal-info">
            <div className="row mx-0 px-0">
              <h3 className="my-3">PERSONAL INFOS</h3>
              <div className="col-md-5">
                <h6>
                  First Name: <span> Atik </span>
                </h6>
                <h6>
                  Last Name: <span> Hasan </span>
                </h6>

                <h6>
                  Freelance: <span> Available </span>
                </h6>
                <h6>
                  Blood Group: <span> AB+ </span>
                </h6>
                <h6>
                  Religion: <span> Muslim </span>
                </h6>
              </div>
              <div className="col-md-7">
                <h6>
                  Age: <span> 21 Years </span>
                </h6>
                <h6>
                  Nationality: <span> Bangladeshi </span>
                </h6>
                <h6>
                  Address: <span> Pabna, Bangladesh </span>
                </h6>
                <h6>
                  Email: <span> atikhasan801@gmail.com </span>
                </h6>
                <h6>
                  Language: <span> Bangla, English, Hindi </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 experience-card">
            <div className="experience-card-inner">
              <h1> 1.5 </h1>
              <h6> __ YEARS OF EXPERIENCE </h6>
            </div>

            <div className="experience-card-inner">
              <h1> 20+ </h1>
              <h6> __ COMPLETED PROJECTS </h6>
            </div>

            <div className="experience-card-inner">
              <h1> 50+ </h1>
              <h6> __ HAPPY CUSTOMERS </h6>
            </div>

            <div className="experience-card-inner">
              <h1> 5+ </h1>
              <h6> __ AWARDS WON </h6>
            </div>
          </div>
        </div>

        {/* skillls */}

        <div className="skills">
          <h1 className="my-5"> MY SKILLS </h1>

          <div className="skills-inner">
            <div className="skills-item">HTML</div>
            <div className="skills-item">CSS</div>
            <div className="skills-item">JAVASCRIPT</div>
            <div className="skills-item">REACT.JS</div>
            <div className="skills-item">FIREBASE</div>
            <div className="skills-item">BOOTSTRAP</div>
            <div className="skills-item">TAILWIND CSS</div>
            <div className="skills-item">NODE.JS</div>
            <div className="skills-item">EXPRESS.JS</div>
            <div className="skills-item">MONGODB</div>
          </div>
        </div>

        {/* experience and education */}

        <div className="education">
          <h1 className="my-5"> EXPERIENCE & EDUCATION</h1>

          <div className="row mx-0 px-0 mt-4">
            <div className="col-md-6">
              <div className="row mx-0 px-0">
                <div className="col-1">
                  <span>
                    <i class="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p> 2019 - 2020 </p>
                  <h5> FRONTEND WEB DEVELOPER </h5>
                  <h6>
                    Worked with HTML, CSS and vanilla js about 1 year long{" "}
                  </h6>
                </div>
              </div>

              <div className="row mx-0 px-0 mt-4">
                <div className="col-1">
                  <span>
                    <i class="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p> 2020 - PRESENT </p>
                  <h5> MERN STACK DEVELOPER </h5>
                  <h6> Working REACT.js and Node.js about 1 year long </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mx-0 px-0 mt-4">
                <div className="col-1">
                  <span>
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p> 2019 </p>
                  <h5> Higher Secondary School Certifice (5.00) </h5>
                  <h6>New Govt Degree College, Rajshahi</h6>
                </div>
              </div>

              <div className="row mx-0 px-0 mt-4">
                <div className="col-1">
                  <span>
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p> 2021 - PRESENT </p>
                  <h5> BSc in Computer Science and Engineering </h5>
                  <h6>University of Asia Pacific, Dhaka</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
