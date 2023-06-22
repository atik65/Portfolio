import React from "react";
import Nav from "../shared/nav/Nav";
import "./about.css";
import { skillSet } from "../../utils/skillsSet";
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
                  Age: <span> 22 Years </span>
                </h6>
                <h6>
                  Nationality: <span> Bangladeshi </span>
                </h6>
                <h6>
                  Address: <span> Dhaka, Bangladesh </span>
                </h6>
                <h6>
                  Email: <span> atik.hasan.dev@gmail.com </span>
                </h6>
                <h6>
                  Language: <span> Bangla, English, Hindi </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 experience-card">
            <div className="experience-card-inner">
              <h1> 2 </h1>
              <h6> __ YEARS OF EXPERIENCE </h6>
            </div>

            <div className="experience-card-inner">
              <h1> 20+ </h1>
              <h6> __ COMPLETED PROJECTS </h6>
            </div>

            <div className="experience-card-inner">
              <h1> 10+ </h1>
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
            {skillSet.map((skill) => {
              return (
                <div key={skill.title} className="skills-item">
                  <div className="skill-icon">
                    <img src={skill.image} alt="" />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}

            {/* <div className="skills-item">REACT.JS</div>
            <div className="skills-item">NEXT.JS</div>
            <div className="skills-item">REDUX</div>
            <div className="skills-item">ZUSTAND</div>
            <div className="skills-item">JOTAI</div>
            <div className="skills-item">TAILWIND CSS</div>
            <div className="skills-item">MATERIAL UI</div>
            <div className="skills-item">NODE.JS</div>
            <div className="skills-item">EXPRESS.JS</div>
            <div className="skills-item">FIREBASE</div>
            <div className="skills-item">MONGODB</div>
            <div className="skills-item">MYSQL</div>
            <div className="skills-item">HTML</div>
            <div className="skills-item">CSS</div>
            <div className="skills-item">BOOTSTRAP</div>
            <div className="skills-item">C++</div>
            <div className="skills-item">JAVA</div>
            <div className="skills-item">OOP</div>
            <div className="skills-item">DS</div>
            <div className="skills-item">UBUNTU</div>
            <div className="skills-item">NGINX</div>
            <div className="skills-item">GIT</div> */}
          </div>
        </div>

        {/* experience and education */}

        <div className="education">
          <h1 className="my-5"> EXPERIENCE & EDUCATION</h1>

          <div className="row mx-0 px-0 mt-4">
            <div className="col-md-6">
              <div className="row mx-0 px-0 ">
                <div className="col-1">
                  <span>
                    <i className="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p className=""> 2022 - present </p>
                  <h5> FRONTEND WEB DEVELOPER in RF Soft Lab </h5>
                  <h6>RF Soft Lab </h6>
                  <h4>
                    During my tenure as a frontend developer at RF Soft Lab from
                    December 2021 to 2022, I played a pivotal role in developing
                    a comprehensive multivendor e-commerce site. Leveraging my
                    expertise in React.js, Redux, and other cutting-edge
                    technologies, I successfully designed and implemented the
                    frontend components for both the customer-facing site and
                    the administrative panel. By collaborating closely with the
                    team, I ensured an intuitive user experience and seamless
                    navigation. This experience not only honed my technical
                    skills but also enhanced my problem-solving abilities and
                    fostered effective communication. I am proud to have
                    contributed to the creation of a robust and feature-rich
                    e-commerce platform for RF Soft Lab.
                  </h4>
                </div>
              </div>

              <div className="row mx-0 px-0 mt-4">
                <div className="col-1">
                  <span>
                    <i className="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p className=""> 2021 - 2022 </p>
                  <h5> FRONTEND WEB DEVELOPER in ZillionsTech </h5>
                  <h6>Zillions Tech </h6>
                  <h4>
                    During my tenure as a frontend developer at ZillionsTech
                    from 2021 to 2022, I had the opportunity to work on exciting
                    projects. One of my key achievements was developing an
                    e-commerce API integration, which involved seamlessly
                    connecting third-party services to enhance the functionality
                    of the platform. Additionally, I was responsible for
                    developing their official web application frontend with
                    proper user experience using React.js, Redux, and other
                    cutting-edge technologies. This experience not only expanded
                    my technical expertise but also sharpened my problem-solving
                    skills and ability to work in a dynamic team environment. I
                    am proud to have contributed to ZillionsTech's success by
                    delivering high-quality frontend solutions.
                  </h4>
                </div>
              </div>

              <div className="row mx-0 px-0 mt-4">
                <div className="col-1">
                  <span>
                    <i className="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p> 2019 - Present </p>
                  <h5> FRONTEND WEB DEVELOPER </h5>
                  <h6>
                    Worked with Javascript , Bootstrap, React.js, Redux,
                    Next.js, Tailwind CSS,HTML, CSS , Material UI, Firebase,
                    MongoDB, Node.js, Express.js, Nginx, Ubuntu, Git, Github,
                    C++, Java, OOP, DS, Algorithms, Problem Solving, etc.
                  </h6>
                </div>
              </div>

              {/* <div className="row mx-0 px-0 mt-4">
                <div className="col-1">
                  <span>
                    <i className="fas fa-briefcase"></i>
                  </span>
                </div>
                <div className="col-11">
                  <p> 2020 - PRESENT </p>
                  <h5> MERN STACK DEVELOPER </h5>
                  <h6> Working with REACT.js and Node.js about 1 year long </h6>
                </div>
              </div> */}
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
