import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import SearchForm from "../../components/SearchForm";

let Wrapped;
beforeEach(() => {
  Wrapped = mount(
    <Root>
      <SearchForm />
    </Root>
  );
});

afterEach(() => {
  Wrapped.unmount();
});

it("has an input field", () => {
  expect(Wrapped.find("input").length).toEqual(1);
});

it("has an input field that user can type in", () => {
  Wrapped.find("input").simulate("change", {
    target: { value: "titanic" }
  });

  Wrapped.update();

  expect(Wrapped.find("input").prop("value")).toEqual("titanic");
});
