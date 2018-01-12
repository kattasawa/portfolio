import React from "react"

import "./style.css"

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        {/* <div className="about-hero-container">
          <h5 className="heading-about">ABOUT</h5>
          <img id="about-hero-image" src="/images/pattern.svg" alt="pattern hero" />
        </div> */}
        <div className="about">
          <div className="heading-symbol">
            <h3>.about</h3>
            <img id="curly-one" src="/images/curly-bracket-1.png" alt="curly bracket" />
            <div className="foto-container">
              <img id="moi" src="/images/moi-circle-bw.png" alt="portrait" />
            </div>
          </div>
          <div className="about-inner">
            <p id="text-about-me">I´m a newborn web-developer with roots in graphic design. Right now, I´m participating<br />
            in Technigo´s twelve week boot-camp, learning html, CSS, JavaScript and React.<br />

            The problem solving is in so many dimensions which gives coding a great creative<br />
            space and that´s very inspiring. Another part of coding that I like is that the<br />
            development opportunities seems to be endless, that gives me eager to<br />
            learn more and go deeper.
            </p>
          </div>
          <div className="symbol">
            <img id="curly-two" src="/images/curly-bracket-2.png" alt="curly bracket" />
          </div>
        </div>
      </div>
    )
  }
}

export default About
