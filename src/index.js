import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/main.scss";

import App from "./components/App";
import MovieDetails from "./components/MovieDetails";
import Root from "./Root";

render(
  <Root>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/movie-details" component={MovieDetails} />
      </div>
    </Router>
  </Root>,
  document.querySelector("#root")
);
