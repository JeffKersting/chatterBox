import React, { useState } from 'react'

function Message( {userName, message, currentUser} ) {



  let userStyle;

  if(userName === currentUser) {
    userStyle="my-messages"
  } else {
    userStyle="other-messages"
  }


  return (
    <div className={userStyle}>
      <div className='name'>{`${userName} says`}:
        <div className='message'>{message}</div>
      </div>
    </div>
  )
}

export default Message;
