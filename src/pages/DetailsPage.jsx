import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetail from '../hooks/useFetchDetail'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

import Divider from '@mui/material/Divider'
import moment from 'moment'




function DetailsPage() {
  const params = useParams()
  const imageURL = useSelector(state => state.movieoData.imageURL)
  const { data } = useFetchDetail(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetail(`/${params?.explore}/${params?.id}/credits`)

  console.log("data", data)
  console.log("CastData", castData)

   const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")
  const duration = (data?.runtime/60)?.toFixed(1)?.split(".")

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "280px",
          position: "relative",
          display: { xs: "none", lg: "block" }, // hidden lg:block
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={imageURL + data?.backdrop_path}
          alt={data?.title || data?.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // objectPosition: "top",
            display: "block",
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(23,23,23,0.9), transparent)",
          }}
        />
      </Box>
      <Box sx={{
        maxWidth: "1400px",
        mx: "auto",
        px: 1,
        py: { xs: "128px", lg: 0 },
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: { xs: 5, lg: 10 },
      }}>
        <Box
          sx={{
            position: "relative",
            mx: { xs: "auto", lg: 0 },
            mt: { lg: "-112px" },
            width: "fit-content",
            minWidth: "240px",
          }}
        >
          <Box
            component="img"
            src={imageURL + data?.poster_path}
            alt={data?.title || data?.name}
            sx={{
              height: "320px",
              width: "240px",
              objectFit: "cover",
              borderRadius: "8px",
              display: "block",
            }}
          />
        </Box>


        <Box>
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "24px", lg: "36px" },
              fontWeight: "bold",
              color: "white",
            }}
          >
            {data?.title || data?.name}
          </Typography>

          {/* Tagline */}
          <Typography sx={{ color: "#363636", mb: 1 }}>
            {data?.tagline}
          </Typography>

          <Divider sx={{ my: 1,backgroundColor:"#363636" }} />

          {/* Rating / Views / Duration */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

            <Typography>
              Rating : {Number(data?.vote_average).toFixed(1)}+
            </Typography>

            <Typography>|</Typography>

            <Typography>View : {Number(data?.vote_count)}</Typography>

            <Typography>|</Typography>

            <Typography>
              Duration : {duration[0]}h {duration[1]}m
            </Typography>
          </Box>

          <Divider sx={{ my: 1,backgroundColor:"#363636" }} />

          {/* Overview */}
          <Box>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white", mb: 1 }}
            >
              Overview
            </Typography>

            <Typography sx={{ mb: 2 }}>{data?.overview}</Typography>

            <Divider sx={{ my: 1 ,backgroundColor:"#363636"}} />

            {/* Status / Release / Revenue */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                textAlign: "center",
                my: 2,
              }}
            >
              <Typography>Status : {data?.status}</Typography>

              <Typography>|</Typography>

              <Typography>
                Release Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </Typography>

              <Typography>|</Typography>

              <Typography>Revenue : {Number(data?.revenue)}</Typography>

            </Box>

            <Divider sx={{ my: 1,backgroundColor:"#363636" }} />
          </Box>

          {/* Director & Writer */}
          <Box>
            <Typography>
              <Box component="span" sx={{ color: "white" }}>
                Director
              </Box>{" "}
              : {castData?.crew[0]?.name}
            </Typography>

            <Divider sx={{ my: 1,backgroundColor:"#363636" }} />

            <Typography>

              <Box component="span" sx={{ color: "white" }}>
                Writer
              </Box>
              {" "}
              : {writer}
            </Typography>
          </Box>

          <Divider sx={{ my: 1 ,backgroundColor:"#363636"}} />

          {/* Cast */}
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 2 }}>
            Cast :
          </Typography>

          <Grid container spacing={3}>
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((starCast, index) => (
                <Grid item key={index} sx={{ width: 96 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={imageURL + starCast?.profile_path}
                      sx={{
                        width: 96,
                        height: 96,
                        objectFit: "cover",
                        borderRadius: "50%",
                        mb: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "#BDBDBD",
                      }}
                    >
                      {starCast?.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>


  )
}

export default DetailsPage