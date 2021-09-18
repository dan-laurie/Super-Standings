import React from 'react' 
import { Link } from 'react-router-dom'
import lewis from '../images/hamilton.jpeg'

const Home = () => {
  return (
    <div className="background-home">
      <div className="container">
        <h1 className="title">Super Standings.</h1>       
        <p className="intro">A simple and easy to use app to find the current or past Driver&apos;s standings of the FIA Formula One World Championship.</p>
        <div className="lewis-div">
          <img className="lewis"src={lewis} alt="lewis-hamilton" />
        </div>
        <Link className="home-btn" to="/standings">View Standings</Link>
      </div>
    </div>
    
  )
}
export default Home