import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import TimerIcon from "@material-ui/icons/Timer";
import SettingsIcon from "@material-ui/icons/Settings";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";

const categories = [
  {
    id: "Functions",
    children: [
      { code: 0, id: "Dashboard", icon: <PeopleIcon /> },
      { code: 1, id: "Search", icon: <PeopleIcon /> },
      { code: 2, id: "Import", icon: <PeopleIcon /> }
    ]
  },
  {
    id: "Preferences",
    children: [
      { code: 10, id: "Analytics", icon: <SettingsIcon /> },
      { code: 11, id: "Performance", icon: <TimerIcon /> },
      { code: 12, id: "Test Lab", icon: <PhonelinkSetupIcon /> }
    ]
  }
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: "rgba(255, 255, 255, 0.7)"
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: 16,
    paddingBottom: 16
  },
  firebase: {
    padding: 30,
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  }
});

class Navigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, ...other } = this.props;

    return (
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(c => {
                let active = false;
                if (c.code === this.props.code) {
                  active = true;
                }
                return (
                  <ListItem
                    button
                    dense
                    onClick={() => this.props.handlePageLanding(c.code)}
                    key={c.id}
                  >
                    <ListItemIcon color="inherit">{c.icon}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                        textDense: classes.textDense
                      }}
                    >
                      {c.id}
                    </ListItemText>
                  </ListItem>
                );
              })}
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
