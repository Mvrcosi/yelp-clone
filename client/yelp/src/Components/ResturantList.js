import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import RestaurantFinder from '../apis/RestaurantFinder'
import {RestaurantsContext} from '../Context/RestaurantsContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';


const ResturantList = (props) => {

const {restaurants, setRestaurants} = useContext(RestaurantsContext);

const [active, setActive] = useState(false);

let navigate = useNavigate()

  useEffect(() => {

    const getRestaurants = async () => {
      try {
        const response = await RestaurantFinder.get("/")
        setRestaurants(response.data.data.restaurants)
      } catch (err) {
  
      }
    }

    getRestaurants()
  }, [setRestaurants])

  const handleDelete = async (e,id)=> {
    e.stopPropagation()

    try {
      const response = await RestaurantFinder.delete(`/${id}`)
      setRestaurants(restaurants.filter((res) => res.id !== id))
    } catch (err) {
      console.log(err)
    }
    
  }
  const handleUpdate = (e, id) => {

    e.stopPropagation()
    navigate(`/restaurants/${id}/update`)
  }

  const handleRestaurantSelect = (id) => {

    navigate(`/restaurants/${id}`)

  }

  return (
    <TableContainer  sx={{ mt:3 }}  component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Restaurant Name</TableCell>
            <TableCell align="right"> Location </TableCell>
            <TableCell align="right">Price Range</TableCell>
            <TableCell align="right">Ratings </TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants && restaurants.map((el) => {

           
          return ( 
          <TableRow  sx={{ cursor:'pointer' }}  onClick={() => handleRestaurantSelect(el.id)} key={el.id} >
          <TableCell>{el.name}</TableCell>
          <TableCell>{el.location}</TableCell>
          <TableCell>{"$".repeat(el.price_range)}</TableCell>
          <TableCell>
            <Rating name="rating" defaultValue={el.rating} precision={1} />
          </TableCell>
          <TableCell align="right">
                <Button variant='contained' onClick={(e) => handleUpdate(e, el.id)}>edit</Button>
                </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="error" onClick={(e) =>handleDelete(e, el.id)}>Delete</Button>
                </TableCell>
            </TableRow>
          )

          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ResturantList;


     