import React from "react";

export default function Die(props){
    const styles ={
        backgroundImage: props.held?   `url("/images/greenbg.png")`   :  `url("/images/dot.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
        
    }
    return(
        <div style={styles} className="dies" onClick={props.holdDie}>
            <h2 className="die-num">{props.value} </h2>
        </div>
        
    )
}