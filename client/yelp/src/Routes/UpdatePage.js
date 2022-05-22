import React from 'react'
import UpdateRestaurant from '../Components/UpdateRestaurant'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const UpdatePage = () => {
  return (
    <>
        <Box sx={{ width: '100%', textAlign:'center'}}>
        <Typography variant="h2" component="div" gutterBottom>
       Update Restaurant
        </Typography>
    </Box>
    <UpdateRestaurant />
    </>
  )
}

export default UpdatePage