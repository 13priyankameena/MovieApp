
import axios from 'axios';
import { Box, Typography, TextField } from "@mui/material";
import Card from "../components/Card";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

function SearchPage() {
  const location = useLocation()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const query = location?.search?.slice(3)

  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page

        }
      })


      setData((preve) => {
        return [
          ...preve,
          ...response.data.results
        ]
      })


    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    if (query) {
      setPage(1)
      setData([])
      fetchData()
    }
  }, [location?.search])


  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(preve => preve + 1)
    }
  }



  useEffect(() => {
    if (query) {
      fetchData()
    }
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box sx={{ py: 8 }}>
      {/* 🔹 Mobile Search Input (lg:hidden) */}
      <Box
        sx={{
          display: { lg: "none" },
          my: 2,
          mx: 1,
          position: "sticky",
          top: "70px",
          zIndex: 30,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search here..."
          value={query?.split("%20")?.join(" ") || ""}
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          sx={{
            backgroundColor: "white",
            borderRadius: "999px",
            input: {
              py: 1,
              px: 2,
              fontSize: "18px",
              color: "#111",
            },
          }}
        />
      </Box>

      {/* 🔹 Container */}
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: { xs: "18px", lg: "20px" },
            fontWeight: 600,
            my: 4,
          }}
        >
          Search Results
        </Typography>

        {/* 🔹 Grid Cards */}
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
          {data.map((searchData, index) => (
            <Card
              key={searchData.id + "search"}
              data={searchData}
              media_type={searchData.media_type}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SearchPage