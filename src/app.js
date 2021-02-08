import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
  } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Route exact path="/home">
          <Home />
    </Route> 
    <Route exact path="/about">
          <About />
    </Route> 
    <Route exact path="/services">
          <Services />
    </Route> 
    <Route exact path="/contact">
          <Contact />
    </Route> 
      <Route exact path="/">
          <Home />
    </Route>
    </div>
    </Router>
  )
}

export default App