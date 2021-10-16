import React from "react";
import Carousel from "./Carousel.JPG"
import Carousel2 from "./Carousel2.jpg"
import Carousel3 from "./Carousel3.JPG" 
import { useHistory } from "react-router";
const Home = () => {
  const history =useHistory();
  const handleAboutPage=()=>{
    history.push("/about")
  }
  return (
    <>
    <div className="errorbody">
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="2000">
            <img
              src={Carousel2}
              className="d-block corousel_image "
              alt="image1..."
            />
            <div className="carousel_content text-center">
              <h1 className="text-light fw-bolder ">Lal Bahadur BC</h1>
              <div className="">
                <h4 className="text-light my-4">Wanna be a passionate  <span style={{ textDecorationLine: "underline", textDecorationColor:"pink"}} className="fw-bolder aim_hover">
                    Frontend Developer
                  </span> </h4>
              </div>
              <button className="btn btn-outline-success border-4 fw-bold fs-4 " onClick={handleAboutPage}> Go <i className="fas fa-user-graduate" ></i> About</button>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <img
              src={Carousel}
              className="d-block corousel_image"
              alt="image2"
            />
            <div className="carousel_content text-center">
              <h1 className="text-light fw-bolder">Lal Bahadur BC</h1>
              <div className="">
                <h4 className="text-light my-4">Wanna be a passionate <span style={{ textDecorationLine: "underline" , textDecorationColor:"pink"}} className="fw-bolder aim_hover">
                    Frontend Developer
                  </span></h4>
               
              </div>
              <button className="btn btn-outline-success border-4 fw-bold fs-4" onClick={handleAboutPage}> Go <i className="fas fa-user-graduate" ></i> About</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Carousel3}
              className="d-block corousel_image"
              alt="image2"
            />
            <div className="carousel_content text-center">
              <h1 className="text-light fw-bolder">Lal Bahadur BC</h1>
              <div className="">
                <h4 className="text-light my-4">Wanna be a passionate  <span style={{ textDecorationLine: "underline", textDecorationColor:"pink" }} className="fw-bolder aim_hover">
                    Frontend Developer
                  </span></h4>
              </div>
              <button className="btn btn-outline-success border-4 fw-bold fs-4" onClick={handleAboutPage}> Go <i className="fas fa-user-graduate" ></i> About</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;
