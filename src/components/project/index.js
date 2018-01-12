import React from "react"
import Catch from "projectscatch/catch"
import projects from "data/projects"
// import graphics from "data/graphics"
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
    )
  }

}
