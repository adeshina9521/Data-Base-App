import React from "react"
import Footer from "./Footer"
import Die from "./Die"
import {nanoid }from "nanoid"


export default function App(){

    const [dice, setDice] = React.useState(allNewDice())
    
    

    function allNewDice(){
        const newDice = [ ]
        for(let i=0; i<10; i++ ){
            newDice.push({value: Math.ceil(Math.random()* 6),
                           isHeld: false,
                            id:nanoid(),

                           })
        }

       return newDice
    }

    function holdDice(id){
        return console.log(id) 
                
    }
    const dieElement = dice.map(
        function myDie(die){
            return ( <Die 
                key={die.id} 
                value = {die.value} 
                held={die.isHeld}
                id= {die.id}
                holdDie = {function() {
                        return holdDice(die.id)}
                        }
                        />)
        }
        )

    function rollDice(){
        setDice(allNewDice())
    }

    
    return(
        <div>
            <main>
                <h3>Tanzie Game</h3>
                    <div className="die">
                        {dieElement}            
                    </div>
                    <button onClick={rollDice}className="roll">Roll</button>
            </main>
            <Footer/>
        </div>
    )
}