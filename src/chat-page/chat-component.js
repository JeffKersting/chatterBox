import React, { useState, useEffect } from 'react'


function ChatPage({ user }) {


  const [chatInput, setChatInput] = useState('')


  const updateChatInput = (event) => {
    setChatInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
   //put call?
  }

  return (
    <>
    <h2>{`Welcome ${user}`}</h2>
    
    {/* <section>{messages}</section> */}
    <input
      type='text'
      name='chat-input'
      value={chatInput}
      onChange={event => updateChatInput(event)}
    ></input>
    </>
  )
}


export default ChatPage;