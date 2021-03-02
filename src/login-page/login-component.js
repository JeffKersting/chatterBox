import React, { useEffect, useState, useRef } from 'react'
const api = process.env.API_URL || 'https://localhost:3000'
function LoginPage(props) {

  const [loginInput, setLoginInput] = useState('')

  const inputRef = useRef()

  useEffect(() => {
    console.log('LOGIN PAGE', process.env.API)
    inputRef.current.focus()
  },[])

  const updateLoginInput = (event) => {
    setLoginInput(event.target.value)
  }

  const postMessage = (event) => {
    event.preventDefault()
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:loginInput,
      })
    }
    fetch(`${api}/users`, postObj)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postMessage(event)
    props.login(loginInput)
  }

  return (
    <div className="login-page">
      <h1>Welcome to chatterBox!</h1>
      <h2>a place for chatting</h2>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username" className="label">User Name</label>
        <input
          type='text'
          name='username'
          value={loginInput}
          onChange={event => updateLoginInput(event)}
          autoComplete='off'
          ref={inputRef}
          />
          <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
