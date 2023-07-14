import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import './Slider.css'

function Slider({apiKey, baseUrl}) {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [index, setIndex] = useState(0)
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"

  const sliderStyle ={
    backgroundImage:`url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "60vh",
    position: "relative"
  }

  useEffect(()=>{
    axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
      .then(res=>{
          console.log(res.data.results)
          setUpcomingMovies(res.data.results)
      })
      .catch(err=>console.log(err))
    }, [])
    
  const handleRight = () => {
    setIndex(index + 1)
    if(index === upcomingMovies.length - 1){
      setIndex(0)
    }
  }
  const handleLeft = () => {
    setIndex(index - 1)
    if(index === 0){
      setIndex(upcomingMovies.length -1)
  }
  }

  return (
    <div style={sliderStyle}>
      <div className="slider-overlay"></div>
        <MdKeyboardArrowRight onClick={handleRight} className="right-arrow"/>
        <MdKeyboardArrowLeft onClick={handleLeft} className="left-arrow"/>
        <div className="slider-info">
          <h1>{upcomingMovies[index]?.title}</h1>
          <p className="slider-description">{upcomingMovies[index]?.overview.slice(0,130)} ...</p>
          <p>Release Date: {upcomingMovies[index]?.release_date}</p>
        </div>
    </div>
  )
}

export default Slider