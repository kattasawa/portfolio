import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Navigation from "./navigation"
import Footer from "./footer"

import Home from "./home"
import About from "./about"
import Project from "./project"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />

          <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />

          <Footer />
        </div>

      </BrowserRouter>
    )
  }
}

export default App
