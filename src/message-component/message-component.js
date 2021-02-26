import React, { useState } from 'react'

function Message( {userName, message}) {
  return (
    <>
      <div>{userName}</div>
      <div>{message}</div>
    </>
  )
}

export default Message;
