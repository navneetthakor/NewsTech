import React, { Component } from "react";
// import logo from '../../public/logo192.png'

export default class NewsIteam extends Component {
  render() {
    return (
      <>
        <div className="card my-2 " style={{width: "18rem"}}>
          <img src="https://photos5.appleinsider.com/gallery/53945-108525-Cupertino-xl.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}
