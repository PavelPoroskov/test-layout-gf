import React from "react";
//import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Toolbar from "./Toolbar";
import Drawer, { drawerWidth } from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const themeDefault = createMuiTheme();

const theme = createMuiTheme({
  ...themeDefault,
  background: "rgba(90,90,90,1)",
  mixins: {
    toolbar: {
      minHeight: 56,
      backgroundColor: "#ffffff"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "rgba(90,90,90,1)",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    zIndex: theme.zIndex.drawer,
    backgroundColor: "#ffffff",
    color: "#167ade",
    displey: "flex"
  },
  toolbar: theme.mixins.toolbar,
  breadcrumbs: {
    paddingTop: "20px",
    paddingBottom: "20px",
    fontSize: "11px"
  },
  contentContainer: {
    flexGrow: 1,
    paddingLeft: theme.spacing(4.5),
    paddingRight: theme.spacing(4.5)
    //backgroundColor: "#5a5a5a",
    //zIndex: theme.zIndex.drawer-1,
  },
  content: {
    paddingTop: "10px"
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles(props);
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar toggleDrawer={handleDrawerToggle} />
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              container={container}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              anchor="left"
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer variant="permanent" open />
          </Hidden>
        </nav>
        <main className={classes.contentContainer}>
          <div className={classes.toolbar} />
          <div className={classes.content}>
            <Breadcrumbs className={classes.breadcrumbs}>
              <Typography color="textPrimary">Главная</Typography>
              <Typography color="textPrimary">Поиск</Typography>
            </Breadcrumbs>
            qw12
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

// ResponsiveDrawer.propTypes = {
// };

export default ResponsiveDrawer;
