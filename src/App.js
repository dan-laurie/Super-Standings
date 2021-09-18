import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Standings from './components/Standings'
function App() {


  return (
    <>
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
    
    
    
    
    
    
    
      </BrowserRouter>
     
    </>
  )
}

export default App
