import React from 'react'
import "./Introduction.css";
import taswira from "./IMG_4294.jpg";


function Introduction(props) {
    const {name,Lastname} = props;
    return (
        <div>
<div className="left">
            <h5  >{props.children} , OUR NAMES ARE <a href='#' onClick={props.onClick}><span className="samer" > {name} {Lastname} </span></a>, <br/> AND WE MAKE STUPID WEBSITES , BYE </h5> 
                <img className="lili" src={taswira} /> 
                </div>
        </div>
        
    )
}

export default Introduction
