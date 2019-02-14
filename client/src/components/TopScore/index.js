import React from "react";
import "./style.css";

function TopScore(props) {
  return <h1 className="points">{props.children}</h1>
  
}

export default TopScore;