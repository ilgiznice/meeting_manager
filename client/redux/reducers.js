import moment from 'moment'
import { CALENDAR, EDITOR } from './constants'

const rDefaultState = {
  fields: {
    id: null,
    participant: '',
    description: '',
  },
  isEditorOpen: false,
  calendar: {
    currentDate: moment(),
    selectedDate: moment(),
  },
  schedule: [],
  clients: [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
  ],
}

export default (state = rDefaultState, action) => {
  switch (action.type) {
    case CALENDAR.SELECT_DATE:
      return Object.assign({}, state, {
        calendar: {
          currentDate: moment(),
          selectedDate: action.date,
        },
      })
    case CALENDAR.CHANGE_MONTH:
      return Object.assign({}, state, {
        calendar: {
          currentDate: moment(),
          selectedDate: moment(state.calendar.selectedDate).add(action.monthIncrement, 'month').startOf('month'),
        },
      })
    case EDITOR.TOGGLE:
      return Object.assign({}, state, {
        isEditorOpen: !state.isEditorOpen,
      })
    case EDITOR.FIELDS.PARTICIPANT:
      return Object.assign({}, state, {
        fields: {
          id: state.fields.id,
          participant: action.participant,
          description: state.fields.description,
        },
      })
    case EDITOR.FIELDS.DESCRIPTION:
      return Object.assign({}, state, {
        fields: {
          id: state.fields.id,
          participant: state.fields.participant,
          description: action.description,
        },
      })
    case EDITOR.SAVE:
      if (state.fields.id) {
        return Object.assign({}, state, {
          schedule: state.schedule.map((meeting) => {
            if (meeting.id === state.fields.id) {
              meeting.participant = state.fields.participant
              meeting.description = state.fields.description
            }
            return meeting
          }),
          isEditorOpen: false,
          fields: {
            id: null,
            participant: '',
            description: '',
          },
        })
      }
      const lastMeeting = state.schedule[state.schedule.length - 1] || {}
      if (!lastMeeting.id) lastMeeting.id = 1
      const newMeeting = { id: lastMeeting.id + 1, participant: state.fields.participant, description: state.fields.description, date: moment(action.date).toDate() }
      return Object.assign({}, state, {
        schedule: [...state.schedule, ...[newMeeting]],
        isEditorOpen: false,
        fields: {
          participant: '',
          description: '',
        },
      })
    case EDITOR.EDIT:
      const meeting = state.schedule.filter(_meeting => _meeting.id === action.id)[0]
      return Object.assign({}, state, {
        isEditorOpen: true,
        fields: {
          id: meeting.id,
          participant: meeting.participant,
          description: meeting.description,
        },
      })
    case EDITOR.REMOVE:
      const meetings = state.schedule.filter(_meeting => _meeting.id !== action.id)
      return Object.assign({}, state, {
        schedule: meetings,
      })
    default:
      return state
  }
}
