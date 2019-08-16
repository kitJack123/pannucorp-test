import React from "react";
import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/SearchBox";
import PropTypes from "prop-types";
import { AppBar, Toolbar, InputBase } from "@material-ui/core";
// import { SearchIcon } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

class SearchBox extends React.Component {
  static propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
  };

  handleSearch = event => {
    this.props.onSearch(event.target.value);
  };

  render = () => {
    const { searchText, classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={this.handleSearch}
          />
        </div>
        </Toolbar>
      </AppBar>
    );
  };
}

export default withStyles(styleSheet)(SearchBox);
