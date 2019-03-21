import React, { Component } from "react";
import logo from "./logo.svg";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    auth: false,
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
    background: ""
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-65px" });
      this.setState({ background: "" });
    } else if (currentScrollY > 0) {
      this.setState({ slide: "0px" });
      this.setState({ background: "rgba(0,0,0,0.5)" });
    } else {
      this.setState({ background: "" });
    }

    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg fixed-top"
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: "transform 90ms linear",
          background: `${this.state.background}`
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li id="linkedinIMG" class="nav-item">
              <a
                class="nav-link fa fa-linkedin-square"
                href="http://www.linkedin.com/in/brandon-redmann-596895169"
                style={{ "font-size": "27px" }}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
