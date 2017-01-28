import { connect } from 'react-redux'
import moment from 'moment'
import { calendar } from '../../../redux/actions'
import Calendar from '../../components/schedule/calendar.jsx'

const mapStateToProps = state => (
  {
    currentDate: state.calendar.currentDate,
    selectedDate: state.calendar.selectedDate,
    schedule: state.schedule,
  }
)

const mapDispatchToProps = dispatch => (
  {
    selectDate: ({ date }) => dispatch(calendar.selectDate({ date })),
    changeMonth: ({ monthIncrement }) => dispatch(calendar.changeMonth({ monthIncrement })),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)
