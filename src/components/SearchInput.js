import React from "react";

import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
//import OutlinedInput from "@material-ui/core/Input";
//import OutlinedInput from "@material-ui/core/InputBase";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  iconSize16: {
    fontSize: 22,
  },
  input: {
    fontSize: 10,
    flex: 1,
//    height: 15
    '& .MuiOutlinedInput-input': {
      paddingLeft: 5,
      paddingTop: 5,
      paddingBottom: 5,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: 'rgba(0, 0, 0, 0.23)'
    }
  }
}));

function SearchInput({ children, ...props }) {
  const classes = useStyles(props);

  const [showInput, setShowInput] = React.useState(false);
  // const refInput = React.useRef()
  // inputRef={el => }

  function toggleShowInput() {
    setShowInput(!showInput);
  }

  return (
    <Box display="flex" style={{ width: "100%", alignItems: 'center'}}>
      <IconButton color="inherit" onClick={toggleShowInput}>
        <SearchIcon className={classes.iconSize16} />
      </IconButton>
      {showInput && <OutlinedInput placeholder="Поиск" className={classes.input} autoFocus/>}
    </Box>
  );
}

export default SearchInput;
