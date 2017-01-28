import React from 'react'
import NavBar from '../containers/navbar.jsx'
import Calendar from '../containers/schedule/calendar.jsx'
import Meetings from '../containers/schedule/schedule.jsx'


export default () => (
  <div>
    <NavBar />
    <Calendar />
    <Meetings />
  </div>
)
