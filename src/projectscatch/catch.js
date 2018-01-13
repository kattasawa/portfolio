import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Catch extends React.Component {

  render() {
    return (
      <div className="work-container">
        <div className="inner">
          <Link to={this.props.link} target="_blank" className="Project">
            <div className="project-image-container">
              <img id="image-assignment" src={this.props.image} alt="Clock" />
              <div className="overlay">
                <div className="text-box">
                  <h1 className="heading-assignment-image">{this.props.name}</h1>
                  <div className="description">
                    {this.props.description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

}
