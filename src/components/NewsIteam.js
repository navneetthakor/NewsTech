import React, { Component } from "react";
// import logo from '../../public/logo192.png'

export default class NewsIteam extends Component {
  
  render() {
    let {title,disc,imgurl} = this.props;
    return (
      <>
        <div className="card my-2 " style={{width: "18rem"}}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {disc}
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
