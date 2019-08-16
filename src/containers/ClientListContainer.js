import { connect } from "react-redux";
import ClientList from "../components/ClientList";
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

const mapStateToProps = state => ({
  // todos: getVisibleClients(state.selectClient, state.visibilityFilter)
  clients: state.clients
});

const mapDispatchToProps = dispatch => ({
  onSelectClient: client => dispatch(selectClient(client))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
