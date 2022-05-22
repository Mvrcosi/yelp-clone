import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ width: '100%', textAlign:'center'}}>
        <Typography variant="h2" component="div" gutterBottom>
       Restaurant Finder 
        </Typography>
    </Box>
  )
}

export default Header