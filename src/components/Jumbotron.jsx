import React, { Component } from "react";
import "./Jumbotron.css";
import logo from "../images/breddlogo.svg";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img
            class="img-responsive center-block"
            alt=""
            id="logo"
            src={logo}
          />
        </div>
      </div>
    );
  }
}

export default Jumbotron;
