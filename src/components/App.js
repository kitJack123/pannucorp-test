import React from "react";
import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/App";
import ClientListContainer from "../containers/ClientListContainer";
import SearchBox from "./SearchBox";
import ClientDetailContainer from "../containers/ClientDetailContainer";

class App extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header" />
        <SearchBox />
        <Grid container className={classes.mainPage}>
          <Grid item xs={2} className={classes.leftSidebar}>
            <ClientListContainer className={classes.clientList} />
          </Grid>
          <Grid item xs={10} classname={classes.mainContent}>
            <ClientDetailContainer />
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default withStyles(styleSheet)(App);
