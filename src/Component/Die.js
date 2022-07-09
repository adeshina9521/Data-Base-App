import React from "react";


export default function Die(props){
    const styles ={
        backgroundColor: props.held ? "#59e391" : "white"
    }
    return(
        <div style={styles} className="dies" onClick={props.holdDie}>
            <h2  className="die-num">{props.value}</h2>
        </div>
        
    )
}