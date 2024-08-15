import React from 'react'
import './header.css'
import logo from '../../assets/logo-white.png'
export default function Header() {
  return (
    <nav>

      <div className='nav_bar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_links">
          <ul>
            <li>About</li>
            <li>PitchList</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="btn">Get Started</div>
        <div className="login">
          <p>Login</p>
        </div>
      </div>
    </nav>
  )
}
