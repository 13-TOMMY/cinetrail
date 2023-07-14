import React from 'react'
import Slider from '../../components/Slider/Slider';
import './Homepage.css'


function Homepage({apiKey, baseUrl}) {
  return (
    <div className="home-container">
      <Slider apiKey={apiKey} baseUrl={baseUrl}/>
    </div>
  )
}

export default Homepage