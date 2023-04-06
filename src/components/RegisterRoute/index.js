import {Component} from 'react'

import CreateContext from '../../context/CreateContext'

import Header from '../Header'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <CreateContext.Consumer>
    {value => {
      const {
        topic,
        username,
        changeTopic,
        changeName,
        setTrue,
        setError,
        showSubmitError,
      } = value

      const onChangeUsername = event => {
        changeName(event.target.value)
      }

      const onChangeOption = event => {
        changeTopic(event.target.value)
      }

      const submitRegisterForm = event => {
        event.preventDefault()

        if (username === '') {
          setTrue()
        } else {
          setError()

          const {history} = props
          history.replace('/')
        }
      }

      return (
        <div>
          <Header />
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              className="login-img"
              alt="website register"
            />
            <form className="form-container" onSubmit={submitRegisterForm}>
              <h1>Let Us Join</h1>

              <div className="input-container">
                {' '}
                <label className="input-label" htmlFor="username">
                  NAME
                </label>
                <input
                  type="text"
                  id="username"
                  className="username-input-field"
                  value={username}
                  onChange={onChangeUsername}
                  placeholder="Your name"
                />
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="topics">
                  TOPICS
                </label>
                <select
                  id="topics"
                  value={topic}
                  className="password-input-field"
                  onChange={onChangeOption}
                >
                  {topicsList.map(eachTopic => (
                    <option key={eachTopic.id} value={eachTopic.displayText}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="login-button">
                Register Now
              </button>
              {showSubmitError ? (
                ''
              ) : (
                <p className="error-message">Please enter your name</p>
              )}
            </form>
          </div>
        </div>
      )
    }}
  </CreateContext.Consumer>
)

export default RegisterRoute
