import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { Box, Typography } from "@mui/material";

const ExplorePage = () => {
  const params = useParams()
  const [pageNo,setPageNo] = useState(1)
  const [data,setData] = useState([])
  const [totalPageNo,setTotalPageNo] = useState(0)

  console.log("params",params.explore)

  const fetchData = async()=>{
    try {
        const response = await axios.get(`/discover/${params.explore}`,{
          params : {
            page : pageNo
          }
        })
        setData((preve)=>{
          return[
              ...preve,
              ...response.data.results
          ]
        })
        setTotalPageNo(response.data.total_pages)
    } catch (error) {
        console.log('error',error)
    }
  }

  const handleScroll = ()=>{
    if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
      setPageNo(preve => preve + 1)
    }
  }

  useEffect(()=>{
    fetchData()
  },[pageNo])

  useEffect(()=>{
      setPageNo(1)
      setData([])
      fetchData()
  },[params.explore])

  useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
  },[])

  return (
    <Box sx={{ py: 8 }}>
  <Box sx={{ maxWidth:"1400",mx:"auto",px:2 }}>
    
    {/* Heading */}
    <Typography
      sx={{
        textTransform: "capitalize",
        fontSize: { xs: "16px", lg: "20px" },
        fontWeight: 600,
        my: 4,
        px:{lg:15,sm:2}
      }}
    >
      Popular {params.explore} show
    </Typography>

    {/* Grid */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 230px)",
        gap: 3,
        justifyContent: {
          xs: "center",
          lg: "center",
        },
         
      }}
    >
      
      {data.map((exploreData) => (
        <Card
          key={exploreData.id + "exploreSection"}
          data={exploreData}
          media_type={params.explore}
        />
      ))}
    </Box>
  </Box>
</Box>
  )
}

export default ExplorePage