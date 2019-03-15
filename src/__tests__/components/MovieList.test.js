import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import MovieList from "../../components/MovieList";

let Wrapped;

beforeEach(() => {
  Wrapped = mount(
    <Root>
      <MovieList />
    </Root>
  );
});

it("has one li when renders", () => {
  expect(Wrapped.find("li").length).toEqual(1);
});
