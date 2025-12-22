import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData,setImageURL} from './store/movieoSlice'

function App() {
const dispatch = useDispatch();

  const fetchTrendingData = async() =>{
    try {
      
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results));
     
    } catch (error) {
      console.log("error",error)
    }
  }

  const fetchConfiguration = async() =>{
    try {
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
     
      
    } catch (error) {
      
    }
  }

useEffect(()=>{
  fetchTrendingData()
  fetchConfiguration()
},[])
  return (
    <Box component="main" sx={{pb:{xs:"56px",lg:0}}}>
     
      <Header/>
      <Box sx={{
        minHeight:"100vh",
        // width:'100%'
      }}>
        <Outlet/>
      </Box>

      <Footer />
     <MobileNavigation/>
    </Box>
  )
}

export default App