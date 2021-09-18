import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm bg-light">
      <div className="container">
        {/*Logo*/}
        <div className="navbar-brand">
          <Link to="/">Super Standings</Link>
        </div>
        {/* Nav Bar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/standings">Standings</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar