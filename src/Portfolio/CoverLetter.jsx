import React from "react";
const CoverLetter = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" text-center mt-4" style={{ color: "#ffffff" }}>
            <div className="">
              <h6 className=" py-0 font-monospace">Letter of Introduction ?? </h6>
              <h1 className="title fw-bolder">Cover Letter</h1>
            </div>
          </div>
          <div className="row mx-auto">
              <div className="text-dark bg-light p-3 my-2">
                  <p className="lead fw-bolder">
                       Re: Application for internship </p>
                       <p className="lead fw-bolder text-transform">
                       <i className="fas fa-pencil-alt"></i>I am writing to express my interest in the internship position within the your organization as a junior frontend Developer /
designer. I am currently a graduated student in BE Computer at National Academy of Science and Technology
(DEC). As part of my program, I have worked some of project while studying computer engineering.
My goal upon graduation is to secure fellowship in software company. I believe that internship at your company
will be invaluable in helping me develop a deeper understanding of the complex programming that drive me easy
to develop the real world projects. </p>
<p className="lead fw-bolder text-transform">
I believe that the combination of my academic and professional experiences has provided me with the
organizational, interpersonal and analytical skills that will enable me to make a significant contribution to the
development of the different projects. Thank you for your time and consideration, and I look
forward to hearing from you. </p>
                  <div className=" text-end me-2">
                      <p className="lead fw-bolder" style={{textDecorationLine:"underline"}}>
                       Your Sincerely
                      </p>
                      <p className="lead fw-bolder">
                       Lal Bahadur BC
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoverLetter;
