import React from 'react'
import Box from './Box'
import './Boards.css'
const Boards = ({boards,onClick}) => {
  return (
    <div className='boards'>
      {boards.map((value,id)=>{
  return <Box value={value} onClick={()=> value===null && onClick(id)}/>
      })}
    
    </div>
  )
}

export default Boards
