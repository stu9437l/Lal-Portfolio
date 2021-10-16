import React from "react";
const Interest =()=>{
   return(
       <>
       <div className="container">
       <div className="row mb-3">
          <div className=" text-center mt-4" style={{ color: "#ffffff" }}>
            <div className="">
              <h6 className=" py-0 font-monospace">what i like ?? </h6>
              <h1 className="title fw-bolder">Interests</h1>
            </div>
          </div>
        </div>
    
        <div className="row">
                <div className="col-lg-9 mx-auto text-light px-5 py-2" style={{backgroundImage:"linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))"}}>
                    <div className="row">
                <div className="col-lg-6">
                    <div className="interest_C my-2 ">
                        <div className="">
                            <h3 className="fw-bolder interest ">
                                Coding
                                </h3>
                        </div>
                    </div>
                    <div className="interest_C my-2">
                        <div className="">
                            <h3 className="fw-bolder interest ">
                                Treking
                                </h3>
                        </div>
                    </div>
                    <div className="interest_C my-2">
                        <div className="">
                            <h3 className="fw-bolder interest ">
                                Reading Articles
                                </h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 interest_image">
                       
                </div>
                </div>
            </div>
        </div>
       </div>

       </>
   ) 
}
export default Interest;