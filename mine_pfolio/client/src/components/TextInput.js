import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './mainScreen.css';

export default function BasicTextFields({labeel ,userInput,setUserInput}) {
  function textInputHandle(useInput){
    setUserInput(useInput.target.value);
    

  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={labeel} variant="outlined" className='textField' style={{ width: '100%' }}  onChange={textInputHandle}/>
      
    </Box>
  );
}
