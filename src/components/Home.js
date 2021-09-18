import React from 'react' 
import { Link } from 'react-router-dom'
import lewis from '../images/hamilton.jpeg'
import logo from '../images/f1-logo.png'
const Home = () => {
  return (
    <div className="background-home">
      <div className="container">
        <h1 className="title">Super-Standings 🏁</h1>       
        <p className="intro">A simple and easy to use app to find the current or past Driver&apos;s standings of the FIA Formula One World Championship.</p>
        <div className="lewis-div">
          <img className="lewis"src={lewis} alt="lewis-hamilton" />
        </div>
        <Link className="home-btn" to="/standings">View Standings</Link>
      </div>
      <div className="text">
        <p>Created as part of an App in a Day Challenge!</p>
        <p>I am currently half way through General Assembly&apos;s Software Engineering Immersive!</p>
        <p>Check out my Git Hub Below!</p>
      </div>
      <a className="git-btn" href="https://github.com/dan-laurie" rel="noreferrer" target="_blank">Git Hub</a>
      <div className="f1">
        <a href="https://www.formula1.com/" rel="noreferrer" target="_blank"><img src={logo} alt="f1-logo" className="f1-image" /></a>
      </div>
    </div>
    
  )
}
export default Home