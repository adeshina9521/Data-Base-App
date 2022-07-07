import React from "react"
import Footer from "./Footer"
import Die from "./Die"


export default function App(){

    const [dice, setdice] = React.useState(allNewDice())
    
    

    function allNewDice(){
        const newDice = [ ]
        for(let i=0; i<10; i++ ){
            newDice.push(Math.ceil(Math.random()* 6))
        }
       return newDice
    }
    console.log(allNewDice())

    const dieElement = dice.map(
        function myDie(die){
            return  <Die value = {die}/>
        }
        )
    return(
        <div>
             

            <main>
            <h3>Tanzie Game</h3>
                <div className="die">
                       {dieElement}            
                </div>
                <button>roll the dice</button>
            </main>
            <Footer/>
        </div>
    )
}