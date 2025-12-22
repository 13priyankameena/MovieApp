import React from 'react'
 import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
 
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height:"40px",
        textAlign: "center",
        backgroundColor: "rgba(82,82,82,0.35)", // neutral-600 + opacity
        color: "rgba(163,163,163,1)",          // neutral-400
     py:0.5
      }}
    >

<Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
         
         
        }}
      >

        <Link to="/" style={{textDecoration:"none",color: "rgba(163,163,163,1)"}} >About</Link>
         <Link to="/" style={{ textDecoration:"none",color: "rgba(163,163,163,1)"}} >Contact</Link>
      </Box>
      <span style={{color: "rgba(163,163,163,1)"}}>Created By Priyanka</span>

    </Box>


    
  )
}

export default Footer