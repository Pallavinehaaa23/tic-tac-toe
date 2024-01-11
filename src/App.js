import { useState } from 'react';
import React from 'react'
import './App.css';
import Boards from './components/Boards';
import Scoreboard from './components/scoreboard';
function App() {
  // const board =["X","X","X","X","X","X","X","X","X"]
  const [board,setboard]=useState(Array(9).fill(null));
  const [xplaying,setxplaying]=useState(true);
  const[scores,setscores]=useState({xscore:0,oscore:0})
  const WIN_COND=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [1,4,7],
    [3,4,5]
 ]

 
 const checkWinner=(board)=>{
  for( let i=0;i<WIN_COND.length;i++){
   const [x,y,z]= WIN_COND[i];
   if(board[x] && board[x]===board[y] && board[y]===board[z]){
  //  console.log(board[x]);
   return board[x];
   }
  }
 }
 const handleclick =(boxid)=>{
    const updateboard= board.map((value,id)=>{
      if(id===boxid)
      return xplaying===true?"X":"O";
      else
      return value;
    })
    const winner =checkWinner(updateboard);
 if(winner){
  if(winner==='O'){
  let {oscore}=scores;
  oscore+=1;
  setscores({...scores,oscore});
  }
  else{
    let {xscore}=scores;
  xscore+=1;
  setscores({...scores,xscore});
  }
  
 }
 
    setboard(updateboard);
    setxplaying(!xplaying);
  }
  return (
   <div className="App">
    <Scoreboard scores={scores} xplaying={xplaying}/>
    <Boards boards ={board} onClick={handleclick}/>
    </div>
  );
}

export default App;
