import rootReducer from "../../reducers";

it("handles action with unknown type", () => {
  rootReducer({}, {});
});
