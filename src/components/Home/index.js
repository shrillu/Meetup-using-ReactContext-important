import {Link} from 'react-router-dom'

import CreateContext from '../../context/CreateContext'

import Header from '../Header'

const Home = () => (
  <CreateContext.Consumer>
    {value => {
      const {isRegister, username, topic} = value

      return (
        <div>
          <Header />

          {isRegister ? (
            <div>
              <h1>Hello {username}</h1>
              <p>Welcome to {topic}</p>
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please Register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </div>
          )}

          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      )
    }}
  </CreateContext.Consumer>
)

export default Home
