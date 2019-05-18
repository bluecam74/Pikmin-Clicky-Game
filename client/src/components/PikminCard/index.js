import React from "react";
import "./style.css";

function PikminCard(props) {
  return (
    <div className="card" onClick={() => props.clickedOnce(props.id)}>
      <div className="img-container" >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PikminCard;
