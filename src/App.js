import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function App() {
  const [loginState, setloginState] = useState(1);
  return (
    <Container fixed>
      <Box sx={{boxShadow:'4px 3px 13px -6px rgba(0,0,0,0.75)', }}>

      <Stack
        direction="row"     
      >
        <Box flex={1} sx={{ height: '85vh',backgroundImage: `linear-gradient(to right,#9bf8f4, #6f7bf7)`}} >

        </Box>
        <Box  flex={1}  >
           {loginState?<Login setloginState={setloginState}/>:<Register setloginState={setloginState}/>}
        </Box>
      </Stack>
      </Box>
  </Container>
  );
}

export default App;
