import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Button } from '@mui/material'
import { original } from '@reduxjs/toolkit'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material"
import { Link } from 'react-router-dom'


function BannerHome() {
    const bannerData = useSelector(state => state.movieoData.bannerData)
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const [currentImage, setCurrentImage] = useState(0)

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage(preve => preve + 1)
        }

    }
    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage(preve => preve - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage < bannerData.length - 1) {
                handleNext()
            } else {
                setCurrentImage(0)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [bannerData, imageURL, currentImage])



    return (
        <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <Box sx={{
                display: 'flex',
                transform: `translateX(-${currentImage * 100}%)`,
                transition: "transform 0.5s ease-in-out",
            }}>
                {
                    bannerData.map((data, index) => {
                        console.log("data in banner", data);

                        return (
                            <Box className="group"
                                key={data.id + "bannerHome" + index} sx={{
                                    height: { xs: "480px", lg: "100vh" }, width: "100%", position: "relative", flexShrink: 0,

                                }}>
                                <Box
                                    component="img"
                                    src={imageURL + data.backdrop_path}
                                    sx={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                        display: "block",

                                    }}
                                />



                                <Box sx={{ height: "100%", width: "100%", position: 'absolute', top: 0, left: 0, background: "linear-gradient(to top, #171717, transparent)" }} />
                                <Box sx={{ component: 'container', mx: "auto", position: "absolute", bottom: 0, maxWidth: "480px", px: 2 }}>
                                    <Typography varient="h3" sx={{ fontWeight: "bold", fontSize: { lg: "24px", xs: "18px" } }}>
                                        {data.title ? data.title : data.original_name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="grey.300"
                                        sx={{
                                            my: 2,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical",
                                        }}
                                    >
                                        {data?.overview}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                        }}
                                    >
                                        <Typography>
                                            Rating : {Number(data?.vote_average).toFixed(1)}+
                                        </Typography>

                                        <Typography component="span">|</Typography>

                                        <Typography>
                                            View : {Number(data?.popularity).toFixed(0)}
                                        </Typography>
                                    </Box>


                                    <Link to={"/"+(data?.media_type ? data.media_type : "movie") + "/" + data.id} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="success" sx={{
                                            mt: 2,
                                            mb: 4,
                                            px: 4,
                                            py: 1,
                                            backgroundColor: "white",
                                            color: "black",
                                            fontWeight: "bold",
                                            borderRadius: 2,
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                background: "linear-gradient(to left, #b91c1c, #f97316)", // red → orange
                                                color: "white",
                                                transform: "scale(1.05)",
                                            },
                                        }}>
                                            Play Now
                                        </Button>
                                    </Link>

                                </Box>


                                {/* button next and previous image */}

                                <Box sx={{ position: 'absolute', inset: 0, px: 2, display: { lg: 'flex', xs: 'none' }, alignItems: 'center', justifyContent: 'space-between', pointerEvents: "none", }}>


                                    <IconButton
                                        className="arrow-btn"
                                        onClick={handlePrevious}
                                        sx={{
                                            pointerEvents: "auto",
                                            opacity: 0,
                                            transform: "scale(0.8)",
                                            transition: "all 0.3s ease",
                                            backgroundColor: "gray",
                                            ".group:hover &": {
                                                opacity: 1,
                                                transform: "scale(1)",
                                            },
                                            "&:hover":
                                                { backgroundColor: "#f5f5f5" }
                                        }}
                                    >
                                        <ArrowBackIosIcon />
                                    </IconButton>

                                    <IconButton
                                        className="arrow-btn"

                                        onClick={handleNext}
                                        sx={{
                                            pointerEvents: "auto",
                                            opacity: 0,
                                            transform: "scale(0.8)",
                                            transition: "all 0.3s ease",
                                            backgroundColor: "gray",
                                            ".group:hover &": {
                                                opacity: 1,
                                                transform: "scale(1)",
                                            },
                                            "&:hover":
                                                { backgroundColor: "#f5f5f5" }
                                        }}
                                    >
                                        <ArrowForwardIosIcon />
                                    </IconButton>


                                </Box>

                            </Box>

                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default BannerHome