import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Typography from '@mui/material/Typography';
const RestaurantDetail = () => {

  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

  const {id} = useParams()

  useEffect(() => {

    const fetchData = async() => {

      try {

        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      }
      catch(err) {
        console.log(err)
      }

    }

    fetchData()

  }, [])

  return (
    <div>
     <Typography variant='h1' sx={{textAlign:'center'}}>{selectedRestaurant && selectedRestaurant.name} </Typography>
    </div>
  )
}

export default RestaurantDetail

