import React from 'react'
import SideBar from '../components/SideBar'
import { useState } from 'react'
const ContactUs = () => {
    const [info, setinfo] = useState({name:'',email:'',messages:''})
    function HandleSubmit(){
        if (info.name==='' || info.email===''){
            alert("Please enter the email and password")
        }else{
        alert("Your message has Submitted Successfully !")
        setinfo({name:'',email:'',messages:''})}
    }
  return (
    <div className='w-full h-full mt-20 flex flex-row z-10 overflow-hidden'>
    <SideBar/>
   <div className='w-full h-full flex justify-start items-center p-11 text-white  flex-row gap-10'>
       <h1 className='text-5xl font-bold'>Contact Us</h1>
       <div className='w-[70%] h-[80%] bg-black/50 p-10 flex flex-col text-xl gap-4'>
       <label>Name</label>
       <input value={info.name} onChange={(e)=>{setinfo({...info,name:e.target.value})}} className='bg-transparent border-2 border-white text-white p-2 rounded-lg'/>
       <label>Email</label>
       <input value={info.email} onChange={(e)=>{setinfo({...info,email:e.target.value})}} className='bg-transparent border-2 border-white text-white p-2 rounded-lg'/>
       <label>Messages</label>
       <textarea value={info.messages} onChange={(e)=>{setinfo({...info,messages:e.target.value})}} className='h-36 bg-transparent border-2 border-white text-white p-2 rounded-lg'></textarea>
       <button onClick={HandleSubmit} className='bg-cyan-800 h-14 rounded-lg hover:bg-cyan-950 transition-all active:scale-[0.97]'>Submit</button>
       </div>
       
   </div>
   </div>
  )
}

export default ContactUs