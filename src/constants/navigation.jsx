import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';

export const navigation = [
        {
            label: "TV Shows",
            href: "tv",
            icon:<LiveTvIcon/>
        },
        {
            label: "Movies",
            href: "movie",
            icon:<MovieIcon />
        }
    ]
    export const mobileNavigation =[
        {
            label:"Home",
            href:"/",
            icon:<HomeIcon/>
        },
        ...navigation,
        {
            label:"search",
            href:"/search",
            icon:<SearchIcon/>

        }
        
    ]

