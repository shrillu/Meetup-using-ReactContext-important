import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-bar-mobile-logo-container">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </div>
  </nav>
)

export default Header
