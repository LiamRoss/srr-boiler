import { combineReducers } from "redux";
import { worldReducer as world } from './worldReducer';

const reducers = combineReducers({
  // TODO: add reducers here
  world
});

export { reducers };