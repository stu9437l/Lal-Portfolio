import React from "react";
import { useHistory } from "react-router-dom";
const Error = () => {
  let history = useHistory();
  const handleAboutPage = () => {
    history.push("/");
  };
  return (
    <>
      <div className="errorbody">
        <div className=" errorPage text-center">
          <h1 className="text-center text-danger">
            <span className="border-end px-2 border-4">
              <i className="fas fa-exclamation-triangle"></i> 404
            </span>
            Page Not Found
          </h1>
          <div className="">
            <button
              className="btn btn-outline-success border-4 fw-bold fs-2"
              onClick={handleAboutPage}
            >
             
              Go <i className="fas fa-user-graduate"></i> Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;
