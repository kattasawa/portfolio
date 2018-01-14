import React from "react"
import { Link } from "react-router-dom"

import "./style.css"

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-container">
        <div className="footer-flex">
          <div className="icons-link">
            <Link to="https://github.com/kattasawa" target="_blank">
              <img id="github-image" src="/images/github_icon.svg" alt="github icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/katarina-sj%C3%B6lund-8021b971/" target="_blank">
              <img id="linkedin-image" src="/images/linkedin_icon.png" alt="linkedin icon" />
            </Link>
          </div>
          <div className="contacts-info">
            katarina.sjolund@outlook.com  |  +4670 817 27 31
          </div>
        </div>
      </div>
    )
  }

}

export default Footer
