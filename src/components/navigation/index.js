import React from "react"
import { Link } from "react-router-dom"

import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div className="header-container">
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
        <label className="hamburger" htmlFor="hamburger">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </label>

        <nav className="menu">
          <ul className="menu-list">
            <li><Link to="/" onClick={() => this.collapse("hamburger-checkbox:checked", "menu")}>Home</Link></li>
            <li><Link to="/project" onClick={() => this.collapse("hamburger-checkbox:checked", "menu")}>Work</Link></li>
            <li><Link to="/about" onClick={() => this.collapse("hamburger-checkbox:checked", "menu")}>About</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation
