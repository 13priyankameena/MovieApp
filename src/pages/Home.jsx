import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'

import { useSelector } from 'react-redux'

import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'
function Home() {
  const trandingData = useSelector(state => state.movieoData.bannerData)
 
  const {data : nowplayingData} = useFetch('/movie/now_playing')
 const {data : topRatedData} = useFetch('/movie/top_rated')
 const {data : popularTvShowData} = useFetch('/tv/popular')
 const {data : onTheAirShowData} = useFetch('/tv/on_the_air')
  return (
    <div>
      <BannerHome />
    <HorizontalScrollCard data={trandingData} heading={"Tranding"} trending={true}/>
    <HorizontalScrollCard data={nowplayingData} heading={"Now Playing"} media_type={"movie"}/>
    <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
        <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
          <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
    </div >
  )

}

export default Home