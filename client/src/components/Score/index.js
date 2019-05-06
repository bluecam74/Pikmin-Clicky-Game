import React from "react";


function Score(props) {
  return (
  <div className="header">
    <p className="title">Pikmin Memory Game</p>
    <h1 className="message"> {props.message}</h1>
    <h1 className="message"> Current Score: {props.score}</h1>
    <button className="reset" onClick={() => props.resetGame()}>Reset Game</button>
    
  </div>
  )
}

export default Score;
