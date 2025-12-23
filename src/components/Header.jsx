import React, {useState,useEffect}from 'react'
import { Box, Container,InputBase, IconButton  } from "@mui/material";
import { NavLink, useNavigate,Link,useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import {navigation} from '../constants/navigation.jsx';

function Header() {
 
    const navigate = useNavigate();
    const location = useLocation();
    const removeSpace =location?.search?.slice(3)?.split("%20").join(" ")
    console.log("removeSpace",removeSpace)
    const [searchInput,setSearchInput] = useState();
    


useEffect(()=>{
    if(searchInput){
    navigate(`/search?q=${searchInput}`)
    }
},[searchInput])

const handleSubmit =(e) =>{
    e.preventDefault();
}

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "64px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 40,
                display: "flex",
                alignItems: "center",
                
            }}
        >
            <Container maxWidth={false} sx={{display:'flex',justifyContent:"flex-end",flex:1}}>
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        

                    }}
                >
                    {/* logo image */}
                    <Link to="/">
                    <img src='logo.png' alt="logo" style={{ width: "120px", height: "30px" }}></img>
                    </Link>


                    {/* links */}
                    <Box sx={{ display: 'flex', justifyContent: "space-between", flex: 1 }}>
                        <Box
                            sx={{
                                display: {
                                    xs: "none",// mobile → hidden
                                    sm: "flex",   // tablet & desktop → visible
                                },
                                gap: 4,
                                pl: 4,
                                alignItems: 'center',


                            }}>
                            {
                                navigation.map((nav, index) => {
                                    return (
                                        <Box
                                            component={NavLink}
                                            to={nav.href}
                                            key={index}

                                            sx={{
                                                color: "var(--text-neutral)",
                                                "&:hover": {
                                                    color: "var(--text-hover)",
                                                },
                                                "&.active": {
                                                    color: "white"
                                                },
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {nav.label}
                                        </Box>
                                    )
                                })

                            }

                        </Box>
                        <Box sx={{display:"flex",gap:5,textAlign:"center",ml:"auto"}}>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <InputBase
                                    placeholder="Search here..."
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}

                                    sx={{
                                        px: 2,
                                        py: 0.5,
                                        color: "white",
                                        display: {
                                            xs: "none",   // mobile → hidden
                                            lg: "block",  // desktop → visible
                                        },
                                    }}
                                />

                                <IconButton type="submit" sx={{ color: "white" }}>
                                    <IoSearchOutline size={22} />
                                </IconButton>
                            </Box>


                            <Box sx={{
                                height: "32px", width: "32px", borderRadius: "50%",
                                cursor: "pointer", transition: "transform 0.3s ease",
                                "&:active": { transform: "scale(0.5)",display:{} }
                            }}>

                                <img src='user.png' style={{ width: "100%", height: "100%", borderRadius: "50%" }}></img>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Container >
        </Box >
    )
}

export default Header