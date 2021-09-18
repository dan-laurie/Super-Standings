import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Standings from './components/Standings'
import FilterYears from './components/FilterYears'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <div className="site-wrapper">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/standings">
              <Standings />
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
