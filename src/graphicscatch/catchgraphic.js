import React from "react"
import "./style.css"

export default class Catchgraphic extends React.Component {

  render() {
    return (
      <div className="graphics-container">
        <div className="inner-graphics">
          <div className="graphic-project-image-container">
            <img id="graphic-image" src={this.props.graphic} alt="Clock" />
            <div className="graphic-overlay">
              <div className="text-box">
                <h1 className="heading-assignment-image">{this.props.company}</h1>
                <div className="graphic-description">
                  {this.props.work}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
