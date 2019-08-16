import { connect } from "react-redux";
import ClientDetail from "../components/ClientDetail";
import { selectClient } from "../actions";
import { searchClient } from "../actions";

// const getVisibleClients = (clients, filter) => {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos;
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed);
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed);
//     default:
//       throw new Error("Unknown filter: " + filter);
//   }
// };

const mapStateToProps = state => {
  const selected = state.clients.filter(client => client.isSelected);
  return {
  // todos: getVisibleClients(state.selectClient, state.visibilityFilter)
  clientInfo: selected.length > 0 ? selected[0] : undefined
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectClient: client => dispatch(selectClient(client))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDetail);
