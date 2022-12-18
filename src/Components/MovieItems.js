import React from "react";

export default function MovieItems(props) {
  return (
    <>
      <h1 style={{ color: "#f18412" }}>{props.movietype}</h1>
      <div className=" row ">
        
        <div className="col-md-3">
          
          <div className="card my-3" style={{ width: "17rem" }}>
            <img src="remote.jpg" className="card-img-top" alt="..." />
            <div className="card-body" style={{ color: "#ff9400" }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          
          <div className="card my-3" style={{ width: "17rem" }}>
            <img src="remote.jpg" className="card-img-top" alt="..." />
            <div className="card-body" style={{ color: "#ff9400" }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          
          <div className="card my-3" style={{ width: "17rem" }}>
            <img src="remote.jpg" className="card-img-top" alt="..." />
            <div className="card-body" style={{ color: "#ff9400" }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          
          <div className="card my-3" style={{ width: "17rem" }}>
            <img src="remote.jpg" className="card-img-top" alt="..." />
            <div className="card-body" style={{ color: "#ff9400" }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
MovieItems.defaultProps = {
  movietype: "set set movie type here",
};
