import React, { useState, useEffect } from 'react'
import Message from '../message-component/message-component'

function ChatPage( { user } ) {

  console.log(user)

  const [chatInput, setChatInput] = useState('')
  const [allMessages, setAllMessages] = useState('')

  useEffect(() => {
    fetchData()
    .then(data => setAllMessages(data))
  }, [])

  useEffect(() => {console.log(allMessages[0])}, [allMessages])

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/messages')
    const data = await response.json()
    return data
  }

  const postMessage = (event) => {
    event.preventDefault()
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message:chatInput,
        user_name: user
      })
    }
    fetch('http://localhost:3000/messages', postObj)
  }

  const updateChatInput = (event) => {
    setChatInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <div className="chat-page">
      <h2>{`Welcome ${user}`}</h2>
      <section>
      {allMessages &&
        allMessages.map(message =>
          <Message
            message={message.message}
            userName={message.user_name}
            currentUser={user}
          />
        )
      }
      </section>
      <form onSubmit={event => postMessage(event)}>
        <label htmlFor='chat-input'></label>
          <input
            type='text'
            name='chat-input'
            value={chatInput}
            onChange={event => updateChatInput(event)}
          >
        </input>
        <button>Send</button>
      </form>
    </div>
  )
}


export default ChatPage;
