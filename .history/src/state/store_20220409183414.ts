import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store: Store<any | {}> = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);
