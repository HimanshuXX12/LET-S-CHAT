import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
       <div className='sidebar-header'>
         <h1>LETS'S CHAT</h1>
         <div>
            <img className='imagger' src='https://images.pexels.com/photos/5560472/pexels-photo-5560472.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <p className='para'>himanshu</p>
            <button className='logout-btn'>logout</button>
         </div>
       </div>
       <div className='sidebar-main'>
         <div>
            <input type='text' placeholder='Find a User' className='sidebar-input pl-2 mb-2'/>
           
         </div>
         <div className='flex items-center py-3 gap-3 sidebar-main-users'>
            <div>
                <img className='sidebar-main-image' src='https://images.pexels.com/photos/4424590/pexels-photo-4424590.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            </div>
            <div className='chat-info '>
                <p className='text-xs font-bold'>Himanshu</p>
                <p className=' italic text-gray-300 ' id="last_message">Hello world</p>
            </div>
         </div>
         <div className='flex items-center py-3 gap-3 sidebar-main-users'>
            <div>
                <img className='sidebar-main-image' src='https://images.pexels.com/photos/5082634/pexels-photo-5082634.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            </div>
            <div className='chat-info '>
                <p className='text-xs font-bold'>Himanshu</p>
                <p className=' italic text-gray-300 ' id="last_message">Hello world</p>
            </div>
         </div>
         <div className='flex items-center py-3 gap-3 sidebar-main-users'>
            <div>
                <img className='sidebar-main-image' src='https://images.pexels.com/photos/6210169/pexels-photo-6210169.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            </div>
            <div className='chat-info '>
                <p className='text-xs font-bold'>Himanshu</p>
                <p className=' italic text-gray-300' id="last_message">Hello world</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Sidebar
