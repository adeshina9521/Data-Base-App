import React from "react"
import HomePage from "./HomePage"
import About from "./About.js"
import Header from "./common/Header"

export default function App(){
    function getPage(){
        const route = window.location.pathname
        if (route === "/about"){
          return  <About/>
        }else {
            return <HomePage/>
        }             
            }
    return(
        <div className="container-fluid">
            <Header/>
            {getPage()}
        </div>
    )
}