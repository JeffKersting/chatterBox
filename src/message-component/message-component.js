import React, { useState } from 'react'

function Message( {userName, message, currentUser}) {



  let userStyle;

  if(userName === currentUser) {
    userStyle="my-messages"
  } else {
    userStyle="other-messages"
  }


  return (
    <div className='message'>
      <div className={userStyle}>{userName}</div>
      <div>{message}</div>
    </div>
  )
}

export default Message;
