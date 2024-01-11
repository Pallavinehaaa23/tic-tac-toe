import React from 'react'
import './score.css'
const scoreboard = ({scores,xplaying}) => {
    const {xscore,oscore}=scores;
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xplaying&& "inactive"}`}>X-{xscore}</span>
      <span className={`score o-score ${xplaying&& "inactive"}`}>Y-{oscore}</span>
    </div>
  )
}

export default scoreboard
