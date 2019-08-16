import { actionTypes } from "../actions";

const clients = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SELECT_CLIENT:
      return state.map(client =>
        client.name === action.selected.name &&
        client.company === action.selected.company
          ? { ...client, isSelected: true }
          : { ...client, isSelected: false }
      );
    default:
      return state;
  }
};

export default clients;
