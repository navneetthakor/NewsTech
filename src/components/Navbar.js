import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsTech
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/in">
                    India
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/us">
                    USA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sa">
                    South Africa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ca">
                    Canada
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/nz">
                    New zelend
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </>
    );
  }
}
