import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import deepOrange from "@material-ui/core/colors/deepOrange";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  orangeAvatar: {
    margin: 5,
    color: "#fff",
    backgroundColor: deepOrange[500]
  }
});

class MainAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      username: "",
      full_name: "",
      password: "",
      user_info: {},
      userlogindialog: false
    };
    this.handleOpenUserDialog = this.handleOpenUserDialog.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  register() {}

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOpenUserDialog() {
    this.setState({ userlogindialog: !this.state.userlogindialog });
  }

  render() {
    const { classes, onDrawerToggle } = this.props;
    return (
      <React.Fragment>
        <AppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={8} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs />
              <Grid item>?</Grid>
              <Grid item>
                <Tooltip title="Alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton
                  color="inherit"
                  className={classes.iconButtonAvatar}
                  onClick={this.handleOpenUserDialog}
                >
                  <Avatar className={classes.orangeAvatar} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Dialog
          open={this.state.userlogindialog}
          onClose={this.handleOpenUserDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">User Login</DialogTitle>
          <DialogContent>
            <DialogContentText />
            <TextField
              autoFocus
              onChange={this.handleChange("username")}
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
            />
            <TextField
              onChange={this.handleChange("password")}
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOpenUserDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.login} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(MainAppBar);
