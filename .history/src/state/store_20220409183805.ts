import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { RepositoryState } from "../state/reducers/repositoryReducer";

export const store = createStore(
  reducers,
  RepositoryState,
  applyMiddleware(thunk)
);
