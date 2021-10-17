import React from "react";
const Education = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" text-center mt-4" style={{ color: "#ffffff" }}>
            <div className="">
              <h6 className=" py-0 font-monospace"> Acquisition of knowledge ??</h6>
              <h1 className="title fw-bolder">Education</h1>
            </div>
          </div>
          <div className="row education_card_res education_card_margin_res">
            <div className="col-lg-5 rounded-3">
              <div className="text-center">
                <div
                  className="educationIcon rounded-top"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(29,27,69,0.7),rgba(9,61,91,0.2))",
                    height: "60px",
                  }}
                ></div>
                <div
                  className=" text-white pt-4 pb-2 rounded-bottom education_linehight"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))",
                    lineHeight: "0.5",
                  }}
                >
                  <h3 className="fw-bolder">SLC</h3>
                  <p className="fw-bold lead">
                    Shree Jana Jagriti Higher Secondery School
                  </p>
                  <p>(Phoolwari-14, Dhangadhi)</p>
                  <p className="fw-bold lead">Percentage : 75.2 %</p>
                  <div className=" px-4 pt-3 pb-1 w-50 mx-auto rounded-3 batch_year_hover">
                    <p className="fw-bold lead" style={{}}>
                      Batch Year: 2070
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-5 rounded-3 ">
              <div className="text-center">
                <div
                  className="educationIcon rounded-top"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(29,27,69,0.7),rgba(9,61,91,0.2))",
                    height: "60px",
                  }}
                ></div>
                <div
                  className=" text-white pt-4 pb-2 rounded-bottom education_linehight"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))",
                    lineHeight: "0.5",
                  }}
                >
                  <h3 className="fw-bolder">HSEB</h3>
                  <p className="fw-bold lead">
                    National Academy of Science & Technology{" "}
                  </p>
                  <p>(Utterbehadi-4, Dhangadhi)</p>
                  <p className="fw-bold lead">Percentage : 67.2 %</p>
                  <div className=" px-4 pt-3 pb-1 w-50 mx-auto rounded-3 batch_year_hover">
                    <p className="fw-bold lead" style={{}}>
                      Batch Year: 2073
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row education_card_res">
            <div className="col-lg-5 rounded-3 mx-auto">
              <div className="text-center">
                <div
                  className="educationIcon rounded-top"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(29,27,69,0.7),rgba(9,61,91,0.2))",
                    height: "60px",
                  }}
                ></div>
                <div
                  className=" text-white pt-4 pb-2 rounded-bottom education_linehight"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))",
                    lineHeight: "0.5",
                  }}
                >
                  <h3 className="fw-bolder">BE Computer</h3>
                  <p className="fw-bold lead">Dhangadhi Engineering College</p>
                  <p>(Utterbehadi-4, Dhangadhi)</p>
                  <p className="fw-bold lead">CGPA : 3.1</p>
                  <div className=" px-4 pt-3 pb-1 w-50 mx-auto rounded-3 batch_year_hover">
                    <p className="fw-bold lead" style={{}}>
                      Batch Year: 2078
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
