import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { About } from "./About";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <header>
          <nav className="nav justify-content-center">
            <Link className="nav-link active" to={'/'}>
              Home
            </Link>
            <Link className="nav-link" to={About}>
              Link
            </Link>
            <Link className="nav-link disabled" href="#">
              Disabled link
            </Link>
          </nav>
        </header>
      </Router>
    );
  }
}
