import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { styleSheet } from "../jss/ClientDetail";
import { Grid, Divider, Container } from "@material-ui/core";
import PropTypes from "prop-types";

class ClientDetail extends React.Component {
  static propTypes = {
    clientInfo: PropTypes.object
  };

  render = () => {
    const { clientInfo, classes } = this.props;
    return (
      <div className={classes.detailWrapper}>
        {clientInfo && (
          <Container>
            <Container>
              <Typography className={classes.pageHeader}>
                Client Details
              </Typography>
              <br />
            </Container>
            <Divider />
            <br />
            <Container>
              <Grid container>
                <Grid item xs={12} className={classes.title}>
                  Name
                </Grid>
                <Grid item xs={12} className={classes.content}>
                  {clientInfo.name}
                </Grid>
              </Grid>
            </Container>
            <Divider />
            <br />
            <Container>
              <Grid container>
                <Grid item xs={12} className={classes.title}>
                  Company
                </Grid>
                <Grid item xs={12} className={classes.content}>
                  {clientInfo.company}
                </Grid>
              </Grid>
            </Container>
            <Divider />
            <br />
            <Container>
              <Grid container>
                <Grid item xs={12} className={classes.title}>
                  Job Title
                </Grid>
                <Grid item xs={12} className={classes.content}>
                  {clientInfo.jobTitle}
                </Grid>
              </Grid>
            </Container>
            <Divider />
            <br />
            <Container>
              <Grid container>
                <Grid item xs={12} className={classes.title}>
                  Job Description
                </Grid>
                <Grid item xs={12} className={classes.content}>
                  {clientInfo.jobDescription}
                </Grid>
              </Grid>
            </Container>
          </Container>
        )}
      </div>
    );
  };
}

export default withStyles(styleSheet)(ClientDetail);
