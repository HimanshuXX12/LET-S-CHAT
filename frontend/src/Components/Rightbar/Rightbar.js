import React from 'react'
import './Rightbar.css'
import MainChat from '../MainChat/MainChat'
import MessageSend from '../MessageSend/MessageSend'
import MessageRightheader from '../MessageRightheader/MessageRightheader'
function Rightbar() {
  return (
    <div className='rightbar'>
        
        <MessageRightheader/>
        <MainChat/>
        <MessageSend/>
    </div>
  )
}

export default Rightbar
