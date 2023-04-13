import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export default class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3 text-center">
          <h2 >KalTak news station</h2>

          <div className="row">
            <div className="col-md-4">
              <NewsIteam />
            </div>
            <div className="col-md-4">
              <NewsIteam />
            </div>
            <div className="col-md-4">
              <NewsIteam />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <NewsIteam />
            </div>
            <div className="col-md-4">
              <NewsIteam />
            </div>
            <div className="col-md-4">
              <NewsIteam />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <NewsIteam />
            </div>
            <div className="col-md-4">
              <NewsIteam />
            </div>
            <div className="col-md-4">
              <NewsIteam />
            </div>
          </div>
        </div>
      </>
    );
  }
}
