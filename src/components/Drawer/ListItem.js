import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: "#ffffff",
    paddingLeft: '21px',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginTop: 3,
    '&:nth-of-type(1)': {
      marginTop: 0,
    },
    minHeight: 56,
    '&:hover': {
      backgroundColor: "rgba(255,255,255,0.102)",
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: "rgba(255,255,255,0.102)",
      borderLeft: '5px solid white',
      paddingLeft: '16px'
    },
    '& .MuiListItemIcon-root': {
      color: "rgba(255,255,255,0.323)",
      minWidth: 'unset',
      paddingRight: 12,
    },
    '&.Mui-selected .MuiListItemIcon-root, &.Mui-selected:hover .MuiListItemIcon-root': {
      color: "rgba(255,255,255,1)",
    },
    // '& .MuiListItemText-primary': {
    '& .MuiListItemText-primary': {
        fontSize: '10px',
      // letterSpacing: '0.02em',
      // fontWeight: 'bold',
      // lineHeight: 'normal',
      lineHeight: '60%',
    }
  }
}));


function CustomisedListItem({children, ...props}) {
  const classes = useStyles(props);
  
  return (
    <ListItem
      classes={{
        root: classes.root,
      }}
      {...props}
    >
      {children}
    </ListItem>
  );
}

export default CustomisedListItem;
