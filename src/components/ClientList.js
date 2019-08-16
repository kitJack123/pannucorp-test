import React from "react";
import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/ClientList";
import PropTypes from "prop-types";
import { List, ListItem } from "@material-ui/core";
import ClientButton from "./ClientButton";

class ClientList extends React.Component {
  static propTypes = {
    clients: PropTypes.array.isRequired,
    onSelectClient: PropTypes.func.isRequired
  };

  render = () => {
    const { clients, onSelectClient, classes } = this.props;
    return (
      <List className={classes.clientListWrapper}>
        {clients.map(client => (
          <ListItem className={classes.clientItemWrapper}>
            <ClientButton
              clientInfo={client}
              onSelectClient={() => onSelectClient(client)}
            />
          </ListItem>
        ))}
      </List>
    );
  };
}

export default withStyles(styleSheet)(ClientList);
