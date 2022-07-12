import { combineReducers } from "redux";
import typingReducer from "./typing";
import commonReducer from "./common";

const rootReducer = combineReducers({
  typing: typingReducer,
  common: commonReducer,
});

export default rootReducer;
