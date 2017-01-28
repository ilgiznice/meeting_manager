import React, { PropTypes } from 'react'
import moment from 'moment'

require('!style!css!sass!../../../../static/style/calendar.scss')

const monthNames = [
  'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
]

const monthPicker = ({ date, changeMonth }) => {
  const [year, month] = [moment(date).year(), moment(date).month()]
  return (
    <div className="month-picker">
      <span className="prev" onClick={() => changeMonth({ monthIncrement: -1 })}>&lt;</span>
      {monthNames[month]}&nbsp;{year}
      <span className="next" onClick={() => changeMonth({ monthIncrement: 1 })}>&gt;</span>
    </div>
  )
}

const formDays = ({ date }) => {
  const daysArray = []
  const day = moment(date).startOf('month').day()
  const daysFromLastMonth = () => {
    if (day > 0) return day - 1
    return 6
  }
  let startDate = moment(date).startOf('month').subtract(daysFromLastMonth(), 'days')
  const lastPlusCurrentCount = daysFromLastMonth() + moment(date).daysInMonth()
  const daysFromNextMonth = () => {
    if (lastPlusCurrentCount % 7 === 0) return 7
    return (6 * 7) - lastPlusCurrentCount
  }
  const endDate = moment(date).endOf('month').add(daysFromNextMonth(), 'days')
  while (startDate < endDate) {
    daysArray.push(startDate)
    startDate = moment(startDate).add(1, 'day')
  }
  return daysArray
}

const divideToWeeks = ({ date }) => {
  const weeksArray = []
  const daysArray = formDays({ date })
  while (daysArray.length !== 0) {
    weeksArray.push(daysArray.splice(0, 7))
  }
  return weeksArray
}

const Calendar = ({ currentDate, selectedDate, schedule, selectDate, changeMonth }) => (
  <div className="calendar">
    {monthPicker({ date: selectedDate, changeMonth })}
    <table>
      <tbody>
        {divideToWeeks({ date: selectedDate }).map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => {
              const className = () => {
                const styles = []
                if (moment(selectedDate).isSame(day, 'day')) styles.push('selected')
                if (moment(currentDate).isSame(day, 'day')) styles.push('current')
                if (moment(day) < moment(currentDate).startOf('month')) styles.push('past')
                if (moment(day) > moment(currentDate).endOf('month')) styles.push('future')
                if (schedule.filter(meeting => moment(meeting.date).isSame(day, 'day')).length !== 0) styles.push('has-meetings')
                return styles.join(' ')
              }
              return (
                <td
                  key={j}
                  onClick={e => selectDate({ date: day.toDate() })}
                  className={className()}
                >
                  {day.date()}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

Calendar.propTypes = {
  currentDate: PropTypes.string,
  selectedDate: PropTypes.string,
  schedule: PropTypes.arrayOf(PropTypes.object),
  selectDate: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
}

Calendar.defaultProps = {
  currentDate: moment().toDate(),
  selectedDate: '',
}

export default Calendar
