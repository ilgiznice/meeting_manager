import { connect } from 'react-redux'
import moment from 'moment'
import { editor } from '../../../redux/actions'
import Meetings from '../../components/schedule/schedule.jsx'

const mapStateToProps = state => (
  {
    date: state.calendar.selectedDate,
    schedule: state.schedule.filter(meeting => moment(meeting.date).isSame(state.calendar.selectedDate, 'day')),
    isEditorOpen: state.isEditorOpen,
    participant: state.fields.participant,
    description: state.fields.description,
    clients: state.clients,
  }
)

const mapDispatchToProps = dispatch => (
  {
    toggleEditor: () => dispatch(editor.toggle()),
    participantChange: ({ participant }) => dispatch(editor.fields.participant({ participant })),
    descriptionChange: ({ description }) => dispatch(editor.fields.description({ description })),
    save: ({ id, date } = { id: null }) => dispatch(editor.save({ id, date })),
    editMeeting: ({ id }) => dispatch(editor.edit({ id })),
    removeMeeting: ({ id }) => dispatch(editor.remove({ id })),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetings)
