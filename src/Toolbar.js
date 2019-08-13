import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
    // color: "#167ade",
  },
}));


function CustomisedToolbar({toggleDrawer, ...props}) {
  const classes = useStyles(props);
  
  return (
    <Toolbar>
    <Box display="flex" style={{ width: "100%" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Box flexGrow={1}>
        <IconButton
          color="inherit"
          // aria-label="open drawer"
          // edge="start"
          // onClick={handleDrawerToggle}
          // className={classes.menuButton}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <IconButton
        color="inherit"
        // aria-label="open drawer"
        // edge="start"
        // onClick={handleDrawerToggle}
        // className={classes.menuButton}
      >
        <ExitToAppIcon />
      </IconButton>
    </Box>
  </Toolbar>
);
}

export default CustomisedToolbar;
