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
      <Route path="/home">
          <Home />
    </Route> 
    <Route path="/about">
          <About />
    </Route> 
    <Route path="/services">
          <Services />
    </Route> 
    <Route path="/contact">
          <Contact />
    </Route> 
    </div>
    </Router>
  )
}

export default App