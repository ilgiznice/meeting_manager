import React, { PropTypes } from 'react'
import { Link } from 'react-router'

require('!style!css!sass!../../../static/style/navbar.scss')

const NavBar = ({ menu }) => (
  <div className="navbar">
    <div className="image">
      <img src="/static/images/profile.png" alt="profile" />
    </div>
    <div className="buttons">
      <button>Settings</button>
      <button>Export</button>
    </div>
    <ul className="menu">
    {menu.map((item, i) => (
      <li className="item" key={i}>
        <Link to={item.url}>
          {item.name}
          &nbsp;
          {item.count !== 0 && item.count}
        </Link>
      </li>
    ))}
    </ul>
  </div>
)

NavBar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NavBar
