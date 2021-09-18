import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Standings = () => {

  const [ standings, setStandings ] = useState([])

  useEffect(() => {
    const getStandings = async () => {
      try {
        const { data } = await axios('http://ergast.com/api/f1/current/driverStandings.json')
        setStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        console.log(standings)
      } catch (err) {
        console.log(err)
      }
    }
    getStandings()
  }, [])

  return (
    <div className="table-div">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Pos</th>
            <th scope="col">Driver</th>
            <th scope="col">Team</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        {standings.map((s, i) => {
          return (
            <tr key={i}>
              <td scope="row"><strong>{s.position}</strong></td>
              <td>{s.Driver.givenName} {s.Driver.familyName}</td>
              <td>{s.Constructors[0].name}</td>
              <td>{s.points}</td>
            </tr>       
          )
        })}
      </table>
    </div>
  )
}
export default Standings