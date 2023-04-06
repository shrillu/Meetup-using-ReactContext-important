import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import CreateContext from './context/CreateContext'

import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

import Home from './components/Home'
import RegisterRoute from './components/RegisterRoute'

// Replace your code here
class App extends Component {
  state = {
    topic: '',
    username: '',
    showSubmitError: true,
    isRegister: false,
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  changeName = name => {
    this.setState({username: name, isRegister: true})
  }

  setTrue = () => {
    this.setState({showSubmitError: false})
  }

  setError = () => {
    this.setState({showSubmitError: true})
  }

  render() {
    const {topic, username, showSubmitError, isRegister} = this.state

    return (
      <CreateContext.Provider
        value={{
          topic,
          username,
          showSubmitError,
          isRegister,
          changeTopic: this.changeTopic,
          changeName: this.changeName,
          setError: this.setError,
          setTrue: this.setTrue,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CreateContext.Provider>
    )
  }
}

export default App
