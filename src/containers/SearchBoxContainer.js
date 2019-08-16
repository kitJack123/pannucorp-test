import { connect } from "react-redux";
import { searchClient } from "../actions";
import SearchBox from "../components/SearchBox";

const mapStateToProps = (state, ownProps) => ({
  searchText: state.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSearch: searchText => dispatch(searchClient(searchText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
