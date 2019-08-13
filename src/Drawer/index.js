import React from 'react';

import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

export const drawerWidth = 192;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth,
    color: "#ffffff",
    backgroundColor: "#353535",
    borderRight: 'unset'
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    color: "#ffffff",
    backgroundColor: "#167ade",
    paddingLeft: '23px',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'upercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderLeft: '1p white',
  },
}));

function CustomisedDrawer(props) {
  const classes = useStyles(props);
  
  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      {...props}
    >
      <div>
        <div className={classes.drawerHeader}>LOGO</div>
        <Divider />
        <List>
          <ListItem button key={1}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'ГЛАВНАЯ'} />
          </ListItem>
          <ListItem button key={2}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'ПУНКТ МЕНЮ'} />
          </ListItem>
          <ListItem button key={3}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'ПУНКТ МЕНЮ'} />
          </ListItem>
          <ListItem button key={4}
            selected={true}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'ПУНКТ МЕНЮ'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default CustomisedDrawer;
