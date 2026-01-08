import React from 'react'
import { Box, Typography } from '@mui/material'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'


function MobileNavigation() {
    return (
        <Box
            component="section"
            sx={{
                display: { lg: "none" },
                height: "70px",
                backgroundColor: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(24px)",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                zIndex: 40,
                
            }}
        >

            <Box sx={{display:"flex", justifyContent:"space-between", height:"100%", alignItems:"center",color:"var(--text-neutral-400)",width:"100%"}}>
                {
                    mobileNavigation.map((nav, index) => {
                        return (
                            <Box
                                component={NavLink}
                                to={nav.href}
                                key={nav.label+"mobilenavigation"}
                                sx={{
                                    px: 3,
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "center",
                                    flexDirection: "column",
                                   color:"var(--text-neutral-400)",
                                    justifyContent: "center",
                                    
                                    textDecoration:"none",

                                    "&.active": {
                                        color: "white",
                                    },
                                }}
                            >
                                <Box sx={{fontSize:{xs:"10px",md:"18px"}}}>{nav.icon}</Box>
                              <Typography sx={{whiteSpace: "nowrap",fontSize:{xs:"10px",md:"18px"}}}>{nav.label}</Typography> 
                            </Box>
                        )
                    })
                }
            </Box>

        </Box>
    )
}

export default MobileNavigation