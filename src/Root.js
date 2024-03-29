import React from "react";
import { Provider } from "react-redux";

import store from "./store";

store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
