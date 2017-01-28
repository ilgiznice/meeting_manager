import { connect } from 'react-redux'
import Clients from '../../components/clients/clients.jsx'

const mapStateToProps = state => (
  {
    clients: state.clients,
  }
)

// const mapDispatchToProps = dispatch => (
//   {
//     //
//   }
// )

export default connect(
  mapStateToProps,
  null,
)(Clients)
