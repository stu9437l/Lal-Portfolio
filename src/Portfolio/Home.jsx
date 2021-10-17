import React from "react";
import Carousel from "./Carousel.JPG"
import Carousel2 from "./Carousel2.jpg"
import Carousel3 from "./Carousel3.JPG" 
import { useHistory } from "react-router";
const Home = () => {
  let greet=new Date().getHours();
  let greeting =" ";
  let greetColor={}
  const dream="< Frontend Developer />"
  if(greet >=1 && greet  <12){
    greeting="Good Morning"
     greetColor={
      color:" Green"
    }
  }
  else if(greet >=12 && greet<16){
     greeting="Good Afternoon"
     greetColor={
      color:" Orange"
    }
  }
  else if(greet >=16 && greet<19){
     greeting="Good Evening"
     greetColor={
      color:"Pink"
    }
  }
  else{
    greeting="Good night"
    greetColor={
      color:" White"
    }
  }

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
            <p className="text-light fw-bolder lead">Hello <span style={greetColor}>{greeting}</span></p>
              <h1 className="text-light fw-bolder ">Lal Bahadur BC</h1>
              <div className="">
                <h5 className="text-light my-4"> <span className="wanna_be">Wanna be a passionate</span>   <span style={{ textDecorationLine: "underline", textDecorationColor:"pink"}} className="fw-bolder aim_hover">
                    {dream}
                  </span> </h5>
              </div>
              <button className="btn btn-outline-success border-4 fw-bold fs-4 " onClick={handleAboutPage}><i className="fas fa-car" ></i> About</button>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <img
              src={Carousel}
              className="d-block corousel_image"
              alt="image2"
            />
            <div className="carousel_content text-center">
            <p className="text-light fw-bolder lead lead">Hello <span style={greetColor}>{greeting}</span></p>
              <h1 className="text-light fw-bolder">Lal Bahadur BC</h1>
              <div className="">
                <h5 className="text-light my-4"><span className="wanna_be">Wanna be a passionate</span> <span style={{ textDecorationLine: "underline" , textDecorationColor:"pink"}} className="fw-bolder aim_hover">
                    {dream}
                  </span></h5>
               
              </div>
              <button className="btn btn-outline-success border-4 fw-bold fs-4" onClick={handleAboutPage}><i className="fas fa-car" ></i> About</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Carousel3}
              className="d-block corousel_image"
              alt="image2"
            />
            <div className="carousel_content text-center">
            <p className="text-light fw-bolder lead">Hello <span style={greetColor}>{greeting}</span></p>
              <h1 className="text-light fw-bolder ">Lal Bahadur BC</h1>
              <div className="">
                <h5 className="text-light my-4"><span className="wanna_be">Wanna be a passionate</span>  <span style={{ textDecorationLine: "underline", textDecorationColor:"pink" }} className="fw-bolder aim_hover">
                   {dream}
                  </span></h5>
              </div>
              <button className="btn btn-outline-success border-4 fw-bold fs-4" onClick={handleAboutPage}> <i className="fas fa-car" ></i> About</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="star text-light star_ani">
        <div className=""><i class="fas fa-star"></i></div>
      </div>
      <div className="meteor text-light star_ani">
        <div className=""><i class="fas fa-meteor"></i></div>
      </div>
      <div className="meteor1 text-light star_ani">
        <div className=""><i class="fas fa-meteor fa-flip-horizontal"></i></div>
      </div>
      <div className="circle text-light star_ani">
        <div className=""><i class="fas fa-circle"></i></div>
      </div>
    </>
  );
};
export default Home;
