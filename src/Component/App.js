import React from "react"
import Footer from "./Footer"
import Die from "./Die"
import {nanoid }from "nanoid"
import Confetti from "react-confetti"


export default function App(){

    const [dice, setDice] = React.useState(allNewDice())

    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect (function (){
        const allHeld = dice.every(function(die){
                                        return die.isHeld 
                                     })
        const firstValue = dice[0].value
        const allSameValue = dice.every(function(die){
                                            return die.value === firstValue
                                           })
        if (allHeld && allSameValue){
            setTenzies(true)
            console.log("You won")

        }
    }, [dice])
    function generateNewDie(){
        return {value: Math.ceil(Math.random()* 6),
            isHeld: false,
             id:nanoid(),

            }
    }

    function allNewDice(){
        const newDice = [ ]
        for(let i=0; i<10; i++ ){
            newDice.push(generateNewDie())
        }

       return newDice
    }

    function holdDice(id){
         setDice(function(prevDice){
           return prevDice.map(
                function(die){
                   return die.id === id ? {...die, isHeld: !die.isHeld} : die 
                }
            )
        })

                
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
        setDice(function(prevDice){
           return prevDice.map(
               function(die){
                   return die.isHeld ? die : generateNewDie()
               }
           ) 
        })
    }

    
    return(
        <div>
            <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="die">
                        {dieElement}            
                    </div>
                    <button onClick={rollDice}className="roll">{tenzies ? "New Game" : "Roll"}</button>
            </main>
            <Footer/>
        </div>
    )
}