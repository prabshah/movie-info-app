import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { initialState } from "../reducers";
import reducer from "../reducers";

const middlewares = [thunk, logger];
const localStorageState = localStorage.getItem("applicationState")
  ? JSON.parse(localStorage.getItem("applicationState"))
  : initialState;

export default createStore(
  reducer,
  localStorageState,
  applyMiddleware(...middlewares)
);
