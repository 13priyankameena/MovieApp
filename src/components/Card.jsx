import { Box,Typography} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

function Card({ data, trending, index,media_type }) {
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const mediaType = data.media_type ?? media_type
  return (
    <Box
      sx={{
        width: "230px",          // ✅ IMPORTANT for horizontal slider
        height: "100%",
        flexShrink: 0,
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
         transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
      }}
    >
      <Link to={"/"+mediaType+"/"+data.id}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
          height: "100%",
           
        }}
      >
         {/* Poster */}
        {
          data?.poster_path ? (

            
        <Box
          component="img"
          src={imageURL + data?.poster_path}
          alt={data?.title || data?.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          
          }}
        />
          ) : ( <Box
  sx={{
    backgroundColor: "#262626",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Typography
    variant="body2"
    sx={{ color: "white" }}
  >
    No image found
  </Typography>
</Box>)
        }

       

        {/* Trending badge */}
        {trending && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 0,
              py: 0.5,
              px: 1.5,
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              fontSize: "14px",
            }}
          >
            #{index} Trending
          </Box>
        )}

        {/* Bottom info */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(20px)",
            p: 1,
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {data?.title || data?.name}
          </Box>

          <Box
            sx={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 0.5,
            }}
          >
            {moment(
              data.release_date || data.first_air_date
            ).format("YYYY")}

            <Box
              sx={{
                backgroundColor: "black",
                px: 1,
                py: 0.3,
                borderRadius: "10px",
                fontSize: "12px",
              }}
            >
              ⭐ {Number(data.vote_average).toFixed(1)}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default Card;




