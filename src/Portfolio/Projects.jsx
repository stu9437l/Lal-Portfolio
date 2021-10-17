import React from "react";
const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" text-center mt-4" style={{ color: "#ffffff" }}>
            <div className="">
              <h6 className=" py-0 font-monospace">what i do ?? </h6>
              <h1 className="title fw-bolder">Projects</h1>
            </div>
          </div>
        </div>
        <div className="row mb-5 projects_res">
          <div className="col-lg-3 project_title text-light">
            <div className="">
              <h3 className="fw-bolder text-center" >
                <i className="fas fa-medal fa-2x" ></i> E-Stationery (Multivendors)
              </h3> 
            </div>
            <div className="project_discription">
              <p className="lead fw-bolder text-light">
                E-statinonery is the one of the my latest website design in the
                internship period. In this project i hadle the frontend part and
                built UI parts using HTML-5 ,CSS , Javascript ,J-quiry and
                animation CDN from wow animation.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5 projects_res">
          <div className="col-lg-3 project_title text-light">
            <div className="">
              <h3 className="fw-bolder text-center">
                <i className="fas fa-medal fa-2x" ></i> Criminal Record 
                System
              </h3>
            </div>
            <div className="project_discription">
              <p className="lead fw-bolder text-light">
                CRMS was my final year project where I work as a team
                leader.CRMS was a web based and Android application which was
                developed for the purpose of reduce paper work in police station
                and instant access of criminal records.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5 projects_res">
          <div className="col-lg-3 project_title text-light">
            <div className="">
              <h3 className="fw-bolder text-center">
                <i className="fas fa-medal fa-2x" ></i> Garment Management System
              </h3>
            </div>
            <div className="project_discription">
              <p className="lead fw-bolder text-light">
                It is also my college life project where me and my friends
                working together to build this application using Dot Net. The
                main objective of this application records of men's and women's
                wearings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
