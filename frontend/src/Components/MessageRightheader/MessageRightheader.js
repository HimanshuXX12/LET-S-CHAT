import React from 'react'
import './MessageRightheader.css'
function MessageRightheader() {
  return (
    <div className='right-header'>
        <div className='container-name'>
            <h2 className='font-bold text-slate-300'>John</h2>
        </div>
        <div className='containers-icon'>
            <div><i class="bi bi-camera-video-fill text-slate-300"></i></div>
            <div><i class="bi bi-person-fill-add text-slate-300"></i></div>
            <div><i class="bi bi-three-dots text-slate-300"></i></div>
        </div>
      
    </div>
  )
}

export default MessageRightheader
