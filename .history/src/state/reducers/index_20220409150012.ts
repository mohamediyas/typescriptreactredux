import { combineReducers } from "redux";
import reducer from "./repositoryReducer";
import repositoriesReducer from "./repositoryReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
