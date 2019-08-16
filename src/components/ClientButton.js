import React from "react";
import { withStyles } from "@material-ui/styles";
import { styleSheet } from "../jss/ClientButton";
import PropTypes from "prop-types";
import { Container, Button } from "@material-ui/core";
import clsx from "clsx";

class ClientButton extends React.Component {
  static propTypes = {
    clientInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      jobDescription: PropTypes.string,
      isSelected: PropTypes.bool
    }).isRequired,
    onSelectClient: PropTypes.func.isRequired
  };

  render = () => {
    const { clientInfo, onSelectClient, classes } = this.props;
    return (
      <Container className={classes.clientWrapper}>
        <Button
          className={clsx(classes.clientButton, {
            [classes.selectedButton]: clientInfo.isSelected
          })}
          onClick={onSelectClient}
        >
          {clientInfo.name}
        </Button>
      </Container>
    );
  };
}

export default withStyles(styleSheet)(ClientButton);
