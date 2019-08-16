import { actionTypes } from "../actions";

const search = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SEARCH_CLIENT:
      return action.searchText;
    default:
      return state;
  }
};

export default search;
