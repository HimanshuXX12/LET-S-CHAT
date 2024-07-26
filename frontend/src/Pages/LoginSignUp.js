import React, { useEffect, useState } from 'react'
import './CSS/LoginSignUp.css'
import { Link } from 'react-router-dom';
import avtar from '../Img/addAvatar.png'
function LoginSignUp() {
    const [value,Setvalue]= useState('Login');
    const [item,Setitem]= useState(false);

    const imageHandler= async (e)=>{
         Setitem(e.target.files[0]);
    }

     const clicker= async ()=>{
         if(value==='Login')
         {
             Setvalue('Register');
         }
         else{
             Setvalue('Login');
         }
     }

  return (
    <div className='login'>
     <div className='login-container'>
         <div className='login-inner-container pt-2 '>
         <h1 className='font-bold'>Let'S CHAT</h1>
         <p className='font-bold'>{value}</p>

            {
               value==='Login'?<></>
               : <div>
                  <input type='text' placeholder='display name' name='display_name' className='inputer'/>
                  <hr/>
               </div>
            }
       
         <div>
            <input type='email' placeholder='email' name='email' className='inputer  '/>
            <hr/>
         </div>
         <div>
         <input type='password' placeholder='password' name='password' className='inputer'/>
         <hr/>
         </div>
         <div>
                <input type='file' id="file" onChange={imageHandler} />
                <label htmlFor='file' className='flex'>
                 <div> <img src={item?URL.createObjectURL(item):avtar} className='avatar-image'/></div>
                  {
                    item?<p className='texter'>Avatar Added</p>
                    :<p className='texter'>Add a Avatar</p>
                  }
                </label>
                
         </div>
         <div className='diver'>
            <button className='btn mb-3 py-2 font-bold'>{value}</button>
         </div>
         {
            value==='Login'?
            <div className='flex gap-2 justify-center my-2'>
                <p  className='text-xs'>New User?</p>
                <Link onClick={clicker} className='text-xs'>Signup</Link>
            </div>
            :<div className='flex gap-2 justify-center my-2'>
                <p className='text-xs'>Already have an account</p>
                <Link className='text-xs' onClick={clicker}>Login</Link>
            </div>
         }
         </div>
        </div>  
    </div>
  )
}

export default LoginSignUp
