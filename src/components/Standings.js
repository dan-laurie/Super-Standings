import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterYears from './FilterYears'
import spinner from '../images/loading-buffering.gif'


const Standings = () => {

  const [ standings, setStandings ] = useState([])
  const [ filteredYears, setFilteredYears ] = useState([])
  const [ rounds, setRounds ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {
    setStandings(null)
    setRounds(null)
   
    const getStandings = async () => {
      try {
        const { data } = await axios('https://ergast.com/api/f1/current/driverStandings.json')
        setStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setRounds(data.MRData.StandingsTable.StandingsLists[0].round)
      } catch (err) {
        setHasError(true)
      }
    }
    getStandings()
  }, [filteredYears])

  const handleFilters = async (e) => {
    setStandings(null)
    setRounds(null)

    if (e.target.value === '') { //if no user input, display all 
      setFilteredYears(standings)
    } else {
      const { data } = await axios.get(`https://ergast.com/api/f1/${e.target.value}/driverStandings.json`) //text field simply updates the end point
      setFilteredYears(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      setRounds(data.MRData.StandingsTable.StandingsLists[0].round)
    }
  }

  return (
    <>
      <div className="background">
        <FilterYears handleFilters={handleFilters}/>
        {standings ?
          <>
            {/* <h6>After {rounds} rounds</h6> */}
            <div className="table-div">
              <table className="table">
                <>
                  <thead>
                    <tr>
                      <th scope="col">Pos</th>
                      <th scope="col">Driver</th>
                      <th scope="col">Team</th>
                      <th scope="col">Points</th>
                    </tr>
                  </thead>
                  {(filteredYears.length > 0 ? filteredYears : standings).map((s, i) => {
                    return (
                      <tr key={i}>
                        <td scope="row"><strong>{s.position}</strong></td>
                        <td>{s.Driver.givenName} {s.Driver.familyName}</td>
                        <td>{s.Constructors[0].name}</td>
                        <td>{s.points}</td>
                      </tr>       
                    )
                  })}
                </>
              </table>
            </div>
          </>
          :
          <>
            {hasError ?
              <h1>Oops! Something went wrong</h1>
              :
              <div className="spinner">
                <img src={spinner}/>
              </div>
            }
          </>
        } 
      </div>
    </>
  )
}
export default Standings