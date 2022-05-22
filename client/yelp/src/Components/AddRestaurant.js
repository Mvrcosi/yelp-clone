import React, {useState, useContext} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import {RestaurantsContext} from '../Context/RestaurantsContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddRestaurant = () => {

  const {addRestaurant} = useContext(RestaurantsContext)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [range, setRange] = useState('')
    const [rating, setRating] = useState('')


   

    const handleAdd =  async (e) => {
      e.preventDefault()
      try {
        const response = await RestaurantFinder.post('/', {
          name,
          location,
          price_range: range,

        })
      addRestaurant(response.data.data.restaurant)


      } catch(err) {
        console.log(err)
      }
      
    }

    
  return (
      <>
      <Box
      sx={{display:'flex', justifyContent:'center', width: '100%'}}
      >
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)}/>
    <TextField id="standard-basic" label="Location" variant="standard" value={location} onChange={(e) => setLocation(e.target.value)} />
    <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-label">Range</InputLabel>
        <Select
          id="demo-simple-select"
          value={range}
          label="Range"
          onChange={(e) => setRange(e.target.value)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    <Button type="submit" onClick={handleAdd} variant="outlined">Add</Button>
  </Box>
  </Box>
</>
  )
}

export default AddRestaurant