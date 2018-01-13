import React from "react"
import Catch from "projectscatch/catch"
import Catchgraphic from "graphicscatch/catchgraphic"
import projects from "data/projects"
import graphics from "data/graphics"
import "./style.css"

export default class Project extends React.Component {

  render() {
    return (
      <div className="project-container">
        <div className="hero-container">
          <h5>WORK</h5>
          <img id="work-hero-image" src="/images/wood-hero.jpg" alt="keyborad hero" />
        </div>

        <div className="projects">
          <div className="header-code-container">
          <div className="code-header">
          <h4>.code</h4>
          </div>
          <div className="project-area">
          {projects.map(item => (
            <Catch
              key={item.id}
              url={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              link={item.link} />
          ))}
          </div>
        </div>
        </div>

        <div className="graphic-container">
          <div className="projects">
            {graphics.map(item => (
              <Catchgraphic
                key={item.idg}
                url={item.idg}
                graphic={item.graphic}
                company={item.company}
                work={item.work} />
            ))}
          </div>
        </div>

      </div>
    )
  }

}
