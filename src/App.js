import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path={process.env.PUBLIC_URL + "/profile"}
          component={Home}
        />
        <Route
          exact={true}
          path={process.env.PUBLIC_URL + "/about"}
          component={About}
        />
        <Route
          exact={true}
          path={process.env.PUBLIC_URL + "/contact"}
          component={Contact}
        />
      </div>
    );
  }
}

export default App;
