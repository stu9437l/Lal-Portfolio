import React from "react";
import Carousel2 from "./Carousel2.jpg";
import Carousel from "./Carousel.JPG";
import Carousel3 from "./Carousel3.JPG"
import Carousel4 from "./Carousel4.jpg"
const About = () => {
    return(
    <>
      <div className="about_me" style={{}}>
        <div className="container">
          <div className="row">
            <div className=" text-center mt-4" style={{color:"#ffffff"}}>
               <div className="">
               <h6 className=" py-0 font-monospace">Who am i ?? </h6>
              <h1 className="title fw-bolder">About Me</h1>
               </div>
              <p className="my-4 fw-bolder lead">
               Self motivated, highly passionate and hard working person seeking a challenging position (Jr. frontend developer) in your organization
               where i can learn new skills, expand my knowledge and leverage my learning.
              </p>
            </div>
            <div className="">
              <div
                className="row py-3 personal_detail_card_background rounded-3"
                style={{
                  overflow: "hidden",
                  backgroundImage: "linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))"
                }}
              >
                <div className="col-lg-4">
                  <div className=" overflow-hidden tab_content_image">
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="img1"
                        role="tabpanel"
                        aria-labelledby="imgbtn1"
                      >
                        <img src={Carousel} alt="img" className="tabimagesize" />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="img2"
                        role="tabpanel"
                        aria-labelledby="imgbtn2"
                      >
                         <img src={Carousel2} alt="img" className="tabimagesize" />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="img3"
                        role="tabpanel"
                        aria-labelledby="imgbtn3"
                      >
                         <img src={Carousel3} alt="img" className="tabimagesize" />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="img4"
                        role="tabpanel"
                        aria-labelledby="imgbtn4"
                      >
                         <img src={Carousel4} alt="img" className="tabimagesize" />
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="col-lg-8 text-light mt-3">
                  <div className="">
                    <div className="">
                      <h2 className="fw-bolder">Frontend Developer</h2>
                      <p className="fw-bolder lead">
                        When you have a big dream, do not keep second option with you because it gives you more
                       excuses when you had a bad time So motivate your self.......!!!
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="">
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right" ></i> Birthday: September 20</h5>
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> Facebook: Lal Bahadur Budhachhetri</h5>
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> Phone: 9865818795</h5>
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> City:Kathamandu</h5>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="">
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> Age:24</h5>
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> Degree: BE Computer</h5>
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> Email: lalbahadurbc2054@gmail.com</h5>
                          <h5 className="my-lg-1 handlePersonalDetail"><i class="fas fa-angle-double-right"></i> Marital Status:Single</h5>
                        </div>
                      </div>
                    </div>
                    <div className="row px-2">
                        <div className="col-12 bg-white rounded-3 mx-auto overflow-hidden">
                      <ul
                        class="nav nav-pills tab_btn_image_res"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link active px-3 py-2 rounded-3 border-0  tab_btn_image_hover"
                            id="imgbtn1"
                            data-bs-toggle="pill"
                            data-bs-target="#img1"
                            type="button"
                            role="tab"
                            aria-controls="img1"
                            aria-selected="true"
                          
                          >
                            <img
                              className="tab_btn_image"
                              src={Carousel}
                              alt=""
                            />
                          </button>
                        </li>
                        <li class="nav-item " role="presentation">
                          <button
                            class="nav-link tab_btn_image_hover"
                            id="imgbtn2"
                            data-bs-toggle="pill"
                            data-bs-target="#img2"
                            type="button"
                            role="tab"
                            aria-controls="img2"
                            aria-selected="false"
                          >
                           
                            <img
                              className="tab_btn_image"
                              src={Carousel2}
                              alt=""
                            />
                          </button>
                        </li>
                        <li class="nav-item tab_btn_image_hover" role="presentation">
                          <button
                            class="nav-link"
                            id="imgbtn3"
                            data-bs-toggle="pill"
                            data-bs-target="#img3"
                            type="button"
                            role="tab"
                            aria-controls="img3"
                            aria-selected="false"
                          >
                           
                            <img
                              className="tab_btn_image"
                              src={Carousel3}
                              alt=""
                            />
                          </button>
                        </li>
                        <li class="nav-item tab_btn_image_hover" role="presentation">
                          <button
                            class="nav-link"
                            id="imgbtn4"
                            data-bs-toggle="pill"
                            data-bs-target="#img4"
                            type="button"
                            role="tab"
                            aria-controls="img4"
                            aria-selected="false"
                          >
                           
                            <img
                              className="tab_btn_image"
                              src={Carousel4}
                              alt=""
                            />
                          </button>
                        </li>
                      </ul>
                      </div>
                    </div>
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
export default About;
