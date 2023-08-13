import React from "react";
import "../Styles/Landing.css"
import { useNavigate } from "react-router-dom"
import landingimage1 from "../Images/Instaimg1/landingimage1.png"

function Landing() {
  let Navigate=useNavigate()
  return (
    <div>
      <div className="container">
        <section className="left">
            <img src={landingimage1} alt="" />
        </section>
        <section className="right">
            <h3>10X Team 04</h3>
            <button onClick={()=>Navigate('/postview')}>ENTER</button>
        </section>
      </div>
    </div>
  )
}

export default Landing;