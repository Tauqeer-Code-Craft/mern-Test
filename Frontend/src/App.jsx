import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link, useNavigate } from 'react-router-dom';


const App = () => {

  const navigate = useNavigate();

  const handlePage = () => {
    navigate('/cards');
  }

  const handleAbout = () => {
    navigate('/about');
  }

  return (
    <Box className={"text-center justify-content-center"} sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" variant='extended' aria-label="add" onClick={handlePage} >
        Card Page
      </Fab>
      <Fab color="secondary" variant='extended' aria-label="add" onClick={handleAbout} >
        About Page
      </Fab>
      
    </Box>
  );
}

export default App