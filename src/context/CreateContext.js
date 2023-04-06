import React from 'react'

const CreateContext = React.createContext({
  topic: '',
  username: '',
  isRegister: false,
  changeTopic: () => {},
  changeName: () => {},
  setError: () => {},
  setTrue: () => {},
})

export default CreateContext
