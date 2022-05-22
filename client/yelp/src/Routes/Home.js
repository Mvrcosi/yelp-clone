import { Container } from '@mui/system'
import React from 'react'
import AddRestaurant from '../Components/AddRestaurant'
import Header from '../Components/Header'
import ResturantList from '../Components/ResturantList'

const Home = () => {
  return ( <Container>
  <Header />
    <AddRestaurant />
    <ResturantList />
    </Container>
  )
}

export default Home