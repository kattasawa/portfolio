import React from "react"
import { Link } from "react-router-dom"

import "./style.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <div className="top-container">
          <div className="hero-container">
            <div id="fade">
              <h5>HELLO, I´M KATTA</h5>
              <h6>I´m a newborn web-developer and graphic designer.</h6>
            </div>
            <img id="hero" src="../images/hero-forest.jpg" alt="forest" />
          </div>
        </div>

        {/* <div className="foo">
          <span className="letter" data-letter=".">.</span>
          <span className="letter" data-letter="p">p</span>
          <span className="letter" data-letter="o">o</span>
          <span className="letter" data-letter="r">r</span>
          <span className="letter" data-letter="t">t</span>
          <span className="letter" data-letter="f">f</span>
          <span className="letter" data-letter="o">o</span>
          <span className="letter" data-letter="l">l</span>
          <span className="letter" data-letter="i">i</span>
          <span className="letter" data-letter="o">o</span>
        </div> */}

        <div className="feature-one">

          <div className="about-image-container">
            <div className="image-heading-box">
              <div className="about-image-text">
                <Link to="/about">
                  <h4 className="heading-feature-one">.about</h4>
                </Link>
                <img id="curly-home" src="/images/curly-bracket-1.png" alt="curlies" />
              </div>
              <div className="curly-two">
                <img id="curly-home-2" src="/images/curly-bracket-2.png" alt="curlies" />
              </div>
            </div>
            <div className="about-image">
              <img id="img1" src="../images/moi-paint.png" alt="self-portrait" />
            </div>
          </div>


          <div className="about-text">
            <div className="text-box">
              <p>With a background in graphic form, both digital and print, I´m now looking forward
                to new challenges within front-end development. I´m humble and responsible, focused
                and committed. <br />
                <br />
                Right now, I'm participating in Technigo's web
                developer boot-camp.<Link to="/about"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
              </p>
            </div>
          </div>
        </div>

        <div className="feature-two">
          <div className="work-text">
            <p>Here I have collected a small sample of projects and works, both coding and graphics.
              I built this site in React.<Link to="/project"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
            </p>
          </div>

          <div className="work-image-container">
            <div className="image-heading-box-2">
              <div className="work-image-text">
                <Link to="/project">
                  <h4 className="heading-feature-two">.work</h4>
                </Link>
                <img id="curly-home" src="/images/curly-bracket-1.png" alt="curlies" />
              </div>
              <div className="curly-two">
                <img id="curly-home-2" src="/images/curly-bracket-2.png" alt="curlies" />
              </div>
            </div>
            <div className="work-image">
              <img id="img2" src="../images/workdesk.png" alt="self-portrait" />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
