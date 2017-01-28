import { connect } from 'react-redux'
import NavBar from '../components/navbar.jsx'

const mapStateToProps = state => (
  {
    menu: [
      {
        name: 'Schedule',
        url: '/',
        count: state.schedule.length,
      },
      {
        name: 'My Clients',
        url: '/clients',
        count: state.clients.length,
      },
    ],
  }
)

export default connect(
  mapStateToProps,
  null,
)(NavBar)
