import { connect } from "react-redux";
import ClientDetail from "../components/ClientDetail";
import { selectClient } from "../actions";

const mapStateToProps = state => {
  const selected = state.clients.filter(client => client.isSelected);
  return {
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
