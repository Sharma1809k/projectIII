import React from "react";
import "./style.css";

function Charactercard(props) {

    const { image, name, handleClick,id, } = props
    return (


        <div onClick={() => handleClick (id,)} className="character">
            <div className="images">
                <img alt={name} src={image} />
            </div>
            <div className="hero">{name} </div>

        </div>
    );
}


export default Charactercard; 