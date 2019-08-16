import { combineReducers } from "redux";
import clients from "./clients";
import search from "./search";

export default combineReducers({
  clients,
  search
});
