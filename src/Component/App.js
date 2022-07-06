import React from "react"
import Footer from "./Footer"
import Die from "./Die"


export default function App(){
    return(
        <div>
             <h3>Tanzie Game</h3>

            <main>
                <div className="die">

                        <Die
                        // className = "die1"
                        value = "1"
                        />
                        <Die
                        // className = "die2"                  
                        value = "2"
                        />
                        <Die
                        // className = "die3"
                        value = "1"
                        />
                        <Die
                        // className = "die4"
                        value = "1"
                        />
                        <Die
                        // className = "die5"
                        value = "1"
                        />
                        <Die
                        // className = "die5"
                        value = "1"
                        />
                        <Die
                        // className = "die7"
                        value = "1"
                        />
                        <Die
                        // className = "die8"      
                        value = "1"
                        />
                        <Die
                        // className = "die9"      
                        value = "1"
                        />
                        <Die
                        // className = "die10"      
                        value = "1"
                        />

                        
                </div>
            </main>
            <Footer/>
        </div>
    )
}