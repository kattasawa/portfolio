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
            <p id="text-about-me">I´m a fledgling web-developer with roots in graphic design, based in Stockholm. I´ve built this site in ReactJS.<br />
              <br />
              Right now, I´m participating in Technigo´s twelve week boot-camp, learning HTML, CSS, JavaScript and React. At Technigo we work by following basic agile methods, doing code-assignments every day and at the same time work with bigger team projects. It´s going fast, learning alot.<br />
              <br />For me, the problem solving, that comes with coding, is in so many dimensions which gives coding a great creative space and that´s very inspiring. Another part of coding that I like is that the development opportunities seems to be endless, that gives me eager to learn more and go deeper.<br />
              <br />With a background in graphic form, I´m looking forward to new challenges within front-end development, may be able to unite this skills.  I´m humble and responsible, focused and committed.<br />
              <br />If you´re interested in collaboration, just reach out!<br />
              <br />
              <h6 id="signatur">/ Katarina Sjölund</h6>
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
