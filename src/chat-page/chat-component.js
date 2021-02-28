import React, { useState, useEffect, useRef } from 'react'
import Message from '../message-component/message-component'
const io = require('socket.io-client')
const socket = io('http://localhost:3002', { withCredentials:false })

function ChatPage( { user } ) {

  const [chatInput, setChatInput] = useState('')
  const [allMessages, setAllMessages] = useState('')
  const inputRef = useRef()
  const chatRef = useRef()


  useEffect(() => {
    inputRef.current.focus()
    fetchData()
    .then(data => setAllMessages(data))
  }, [])
 
  useEffect(() => {
    socket.on('change', () => {
      fetchData()
      .then(data => setAllMessages(data))})
  })

  useEffect(() => {
    console.log('scroll')
    scrollToBottom()
  }, [allMessages])

  const scrollToBottom = () => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight
  }

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
    .then(socket.emit('message', true))
    .then(setChatInput(''))
  }

  const updateChatInput = (event) => {
      setChatInput(event.target.value)
  }

  return (
    <div className="chat-page">
      <h2>{`Welcome ${user}`}</h2>
      <section  ref={chatRef}>
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
            ref={inputRef}
          >
        </input>
        <button disabled={!chatInput}>Send</button>
      </form>
    </div>
  )
}


export default ChatPage;
