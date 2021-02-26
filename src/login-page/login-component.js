import React, { useState } from 'react'

function LoginPage(props) {

  const [loginInput, setLoginInput] = useState('')

  const updateLoginInput = (event) => {
    setLoginInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(loginInput)
  }

  return (
    <div className="login-page">
      <h1>Welcome to chatterBox!</h1>
      <h2>a place for chatting</h2>
      <form className="login" onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={loginInput}
          onChange={event => updateLoginInput(event)}
          autocomplete='off'
          />
          <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
