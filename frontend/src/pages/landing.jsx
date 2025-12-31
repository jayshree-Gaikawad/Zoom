import React from "react";
import "../App.css";
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage(){

    const router = useNavigate();
    
    return (
        <div className="landingPageContainer">
         <nav>
            <div className="navHeader">
                <h2>Apna Video Call</h2>
            </div>

            <div className="navList">
                <p onClick={() => {
                    router("/aljk23");     
                }}>Join as Guest</p>

                <p onClick={() => {
                 router("/auth");
                }}>Register</p>

                <div onClick={() => {
                  router("/auth");
                }} role='button' className="btn btn-warning loginIcon"  ><p>Login</p></div>
            </div>
         </nav>

         <div className="landingMainContainer">
            <div>
                <h1><span style={{color: "#FF9839"}}>Connect</span> with your <br/>Loved Ones</h1>
                <p>Cover a distance by apna video call</p>

                <div role="button">
                 <a href="/auth" className="btn" style={{backgroundColor: "#FF9839", color: "white"}}>Get Started</a>
                </div>
            </div>
            
            <div>
                <img src="./mobile.png" alt="mobile" />
            </div>
         </div>
        </div>
    )
}