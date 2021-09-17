import axios from 'axios'
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    const getStandings = async () => {
      try {
        const { data } = await axios('http://ergast.com/api/f1/current/driverStandings.json')
        console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      } catch (err) {
        console.log(err)
      }
    }
    getStandings()
  }, [])



  return (
    <>
      <h1>Super Standings</h1>
      <p>A simple app that displays Formula 1 information past and present!</p>
    </>
  )
}

export default App
