import React, { useState, useEffect } from 'react'


function ChatPage({ user }) {


  const [chatInput, setChatInput] = useState('')
  const [allMessages, setAllMessages] = useState('')

  useEffect(() => {
    fetchData()
    .then(data => setAllMessages(data))
  }, [])

  useEffect(() => {console.log(allMessages)}, [allMessages])

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/messages')
    const data = await response.json()
    return data
  }

  const updateChatInput = (event) => {
    setChatInput(event.target.value)
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //  //put call?
  // }

  return (
    <>
    <h2>{`Welcome ${user}`}</h2>
    
    <section>{allMessages && allMessages.map(message => message.message)}</section>
    <form> 
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
   
   
    </>
  )
}


export default ChatPage;