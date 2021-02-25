import React, { useState } from 'react'

function LoginPage() {

  const [loginInput, setLoginInput] = useState('')

  const updateLoginInput = (event) => {
    setLoginInput(event.target.value)
  }

  return (
    <>
      <h1>Welcome to chatterBox!</h1>
      <form className="login">
        <input
          type='text'
          name='username'
          value={loginInput}
          onChange={event => updateLoginInput(event)}
          autocomplete='off'
        />
        <input type='submit' value='Submit'></input>
      </form>
    </>
  )
}
