import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/main.scss";

import store from "./store";
import App from "./components/App";
import MovieDetails from "./components/MovieDetails";

store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/movie-details" component={MovieDetails} />
      </div>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
