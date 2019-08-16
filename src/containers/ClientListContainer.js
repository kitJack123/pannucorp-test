import { connect } from "react-redux";
import ClientList from "../components/ClientList";
import { selectClient } from "../actions";

const getFilteredClients = (clients, searchText) => {
  if (searchText === "") return clients;
  return clients.filter(
    client =>
      client.name.indexOf(searchText) !== -1 ||
      client.company.indexOf(searchText) !== -1 ||
      client.jobTitle.indexOf(searchText) !== -1 ||
      client.jobDescription.indexOf(searchText) !== -1
  );
};

const mapStateToProps = state => ({
  clients: getFilteredClients(state.clients, state.search)
});

const mapDispatchToProps = dispatch => ({
  onSelectClient: client => dispatch(selectClient(client))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
