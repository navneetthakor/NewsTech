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
                  <a className="nav-link" href="/">
                    Features
                  </a>
                </li>
                
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/in">in</a ></li>
            <li><a className="dropdown-item" href="/us">us</a></li>
            <li><a className="dropdown-item" href="/sa">sa</a></li>
            <li><a className="dropdown-item" href="/ca">ca</a></li>
            <li><a className="dropdown-item" href="/nz">nz</a></li>
          </ul>
        </li>
              </ul>
            </div>
          </div>

        </nav>
      </>
    );
  }
}
