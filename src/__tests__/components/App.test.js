import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Root from "../../Root";
import App from "../../components/App";
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import MovieList from "../../components/MovieList";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

let Wrapped;

beforeEach(() => {
  Wrapped = shallow(<App />);
});

it("renders Header, SearchForm and MovieList components", () => {
  expect(Wrapped.find(Header).length).toEqual(1);
  expect(Wrapped.find(SearchForm).length).toEqual(1);
  expect(Wrapped.find(MovieList).length).toEqual(1);
});
