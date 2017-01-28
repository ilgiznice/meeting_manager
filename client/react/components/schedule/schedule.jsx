import React, { PropTypes } from 'react'
import moment from 'moment'

import Editor from './editor.jsx'
import Meetings from './meetings.jsx'

require('!style!css!sass!../../../../static/style/schedule.scss')

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
]

const Schedule = ({ date, schedule, isEditorOpen, participant, description, clients, toggleEditor, participantChange, descriptionChange, save, editMeeting, removeMeeting }) => (
  <div className="schedule">
    {!isEditorOpen ? (
      <div>
        <span className="date">
          {monthNames[moment(date).month()]}, {moment(date).date()}
        </span>
        <span className="create">
          <button onClick={() => toggleEditor()}>Создать</button>
        </span>
      </div>
    ) : (
      <span>Новая встреча на {monthNames[moment(date).month()]}, {moment(date).date()}</span>
    )}
    <div>
      {isEditorOpen && <Editor
        participant={participant}
        description={description}
        date={date}
        clients={clients}
        participantChange={participantChange}
        descriptionChange={descriptionChange}
        toggleEditor={toggleEditor}
        save={save}
      />}
      {!isEditorOpen && schedule.length !== 0 ?
        <Meetings
          schedule={schedule}
          editMeeting={editMeeting}
          removeMeeting={removeMeeting}
        />
      : !isEditorOpen && (
        <span>Нет запланированных встреч</span>
      )}
    </div>
  </div>
)

Schedule.propTypes = {
  date: PropTypes.string.isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object),
  isEditorOpen: PropTypes.bool,
  participant: PropTypes.string,
  description: PropTypes.string,
  clients: PropTypes.arrayOf(PropTypes.object),
  toggleEditor: PropTypes.func.isRequired,
  participantChange: PropTypes.func.isRequired,
  descriptionChange: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  editMeeting: PropTypes.func.isRequired,
  removeMeeting: PropTypes.func.isRequired,
}

Schedule.defaultProps = {
  schedule: [],
  isEditorOpen: false,
  participant: '',
  description: '',
  clients: [],
}

export default Schedule
