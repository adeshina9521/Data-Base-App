import React from "react"
import Twitterlogo from "../images/twiter_logo.png"
import Facebooklogo from "../images/facebook_logo.png"
import Githublogo from "../images/github_logo.png"


export default function Footer(){
    return(
        <div className="card-ft">
            <img className="ft_logo lg" src={Twitterlogo} alt="twitterlogo"></img>
            <img className="ft_logo " src={Facebooklogo} alt="facebooklogo"></img>
            <img className="ft_logo" src={Githublogo} alt="twiterlogo"></img>
        </div>
    )
}