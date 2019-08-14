import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToAppOutlined";
import Toolbar from "@material-ui/core/Toolbar";
// import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

import SearchInput from "./SearchInput";

const useStyles = makeStyles(theme => ({
  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
    // color: "#167ade",
  },
  iconSize20: {
    fontSize: 26.6,
  },
}));


function CustomisedToolbar({toggleDrawer, ...props}) {
  const classes = useStyles(props);
  
  // <SearchIcon className={classes.iconSize}/>
  return (
    <Toolbar>
    {/* <Box display="flex" style={{ width: "100%", alignItems: 'center'}}> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        className={classes.menuButton}
      >
        <MenuIcon/>
      </IconButton>
      {/* <Box flexGrow={1}> */}
        <SearchInput />
      {/* </Box> */}
      <IconButton
        color="inherit"
      >
        <ExitToAppIcon className={classes.iconSize20}/>
      </IconButton>
    {/* </Box> */}
  </Toolbar>
);
}

export default CustomisedToolbar;
