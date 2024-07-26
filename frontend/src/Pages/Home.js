import React from 'react'
import './CSS/Home.css'
import Sidebar from '../Components/Sidebar/Sidebar';
import Rightbar from '../Components/Rightbar/Rightbar';
function Home() {
   const clicker= async ()=>{
      alert("Don't tap it");
   }
  return (
    <div className='home'>
      <div className='home-container'>
        
        <Sidebar/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home
