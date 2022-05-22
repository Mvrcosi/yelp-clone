import React, { useDebugValue, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import { Container } from '@mui/system'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RestaurantFinder from '../apis/RestaurantFinder'
import { Button } from '@mui/material';


const UpdateRestaurant = (props) => {

    let navigate = useNavigate()

    const [range, setRange] = React.useState('');
    const [name, setName] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [currRestaurant, setCurrRestaurant] =  React.useState('')

    const handleChange = (event) => {
      setRange(event.target.value);
    };

    let {id } = useParams();



    useEffect(() => {

        try {
            const loadRestaurant = async () => {
                let response = await RestaurantFinder.get(`/${id}/`)
                setCurrRestaurant(response.data.data.restaurant)

            }

        loadRestaurant()

    
        } catch (err) {
            console.log(err)
        }

    }, [])

    const handleClick = async(e) => {
        e.preventDefault()
        try {
            let response = await RestaurantFinder.put(`/${id}`, {
                name,
                location,
                price_range: range,
            })

            navigate('/')


        } catch(err) {
            console.log(err)
        }
    }



  return (
      <Container sx={{display:'flex', justifyContent:'center'}}>

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label={currRestaurant && currRestaurant.name} variant="standard" value={name} onChange={(e)=> setName(e.target.value)} />
      <TextField id="standard-basic" label={currRestaurant && currRestaurant.location} variant="standard" value={location} onChange={(e)=> setLocation(e.target.value)} />
      <FormControl variant="standard" fullWidth>
        <InputLabel id="select">Price Range</InputLabel>
        <Select
          labelId="select"
          id="select"
          value={range}
          label="Price Range"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleClick} variant='contained'>Update</Button>

    </Box>
    </Container>

  )
}

export default UpdateRestaurant

