import React, { PropTypes } from 'react'

const Meetings = ({ schedule, editMeeting, removeMeeting }) => (
  <div id="meetings">
    {schedule.map(meeting => (
      <div key={meeting.id}>
        <div>
          {meeting.description}
          <span className="buttons">
            <button onClick={() => editMeeting({ id: meeting.id })}>Edit</button>
            <button onClick={() => removeMeeting({ id: meeting.id })}>Remove</button>
          </span>
        </div>
        <div>
          {meeting.participant}
        </div>
      </div>
    ))}
  </div>
)

Meetings.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.object),
  editMeeting: PropTypes.func.isRequired,
  removeMeeting: PropTypes.func.isRequired,
}

Meetings.defaultProps = {
  schedule: [],
}

export default Meetings
