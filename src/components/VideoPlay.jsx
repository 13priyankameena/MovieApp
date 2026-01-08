import React from 'react'
import { Box } from '@mui/material'
import { IoClose } from "react-icons/io5";
import useFetchDetail from '../hooks/useFetchDetail';

function VideoPlay({ data, close, media_type }) {

  // console.log("data in video play", data, media_type);
  const { data: videoData } = useFetchDetail(`/${media_type}/${data?.id}/videos`)
  console.log("data in video play", videoData);
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(86, 82, 82, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          width: { xs: "90vw", md: "70vw" },
          maxWidth: "1024px",
          aspectRatio: "16 / 9",   // 
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",     // 
        }}
      >

        <Box sx={{ position: "absolute", top: 0, right: 0, color: "white", fontSize: "24px", cursor: "pointer", p: 1, zIndex: 2000, bgcolor: "rgba(0, 0, 0, 0.1)", borderBottomLeftRadius: "8px" }}
          onClick={close}>
          <IoClose /></Box>


        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          style={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
        />


      </Box>
    </Box>
  )
}

export default VideoPlay
