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
    <>
      <h1>Welcome to chatterBox!</h1>
      <form className="login" onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={loginInput}
          onChange={event => updateLoginInput(event)}
          autoComplete='off'
          />
          <button/>
      </form>
    </>
  )
}

export default LoginPage
