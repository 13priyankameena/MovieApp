import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "./Card";

function HorizontalScrollCard({
  data = [],
  heading,
  trending = false,
  media_type,
}) {
  const containerRef = useRef(null);   //containerRef is a object like a pointer

  const handleNext = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3 }, my: 5 }}>
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "18px", lg: "24px" },
          fontWeight: "bold",
          mb: 3,
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {heading}
      </Typography>

      {/* Slider Wrapper */}
      <Box sx={{ position: "relative" }}>
        {/* Scroll Container */}
        <Box
          ref={containerRef}
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "200px",
            gap:6,
            overflowX: "auto",
            scrollBehavior: "smooth",
            pb: 1,

            /* Hide scrollbar */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          {data.map((item, index) => (
            <Card
              key={item.id + "slider" + index}
              data={item}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </Box>

        {/* Navigation Buttons (Desktop only) */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: { xs: "none", lg: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              backgroundColor: "white",
              color: "black",
              ml: -1,
              pointerEvents: "auto",
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "white",
              color: "black",
              mr: -1,
              pointerEvents: "auto",
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default HorizontalScrollCard;






