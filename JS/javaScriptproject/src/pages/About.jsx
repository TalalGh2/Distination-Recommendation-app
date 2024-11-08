import React from 'react'
import SideBar from '../components/SideBar'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
const About = () => {
    const members = [{name:'Talal', job:"CEO"},{name:"Mohammed",job:"Instructure"},{name:"sara",job:"delivary head"}]
  return (
    <div className='w-full h-full mt-20 flex flex-row z-10 overflow-hidden'>
    <SideBar/>
   <div className='w-full h-full flex justify-start text-white items-start flex-col gap-20 p-20'>
       <h1 className='text-5xl font-bold'>About Us</h1>
       <div className='w-full h-auto'><p className='bg-black/50 p-4 '>Welcome to Our Travel Destination Guide!

Embark on a journey of discovery with us! Whether you're planning your next vacation or simply dreaming of far-off places, we're here to guide you to the world's most exciting and beautiful destinations. From stunning beaches to historic cities, our website offers expert insights, travel tips, and everything you need to explore the best spots around the globe. Let us help you turn your travel dreams into unforgettable experiences. Get inspired, plan your adventure, and start exploring the world today!</p>
       
       </div>
       <div className='w-full h-auto flex gap-48 items-center '>
        <h1 className='text-5xl font-bold'>Our Team</h1>
            <div className='flex gap-6 '>
            {members.map((member)=>{
                return <div className='w-80 h-60 bg-black/50 rounded-lg flex'><div className='w-[30%] h-full '><img src={member.name === 'sara' ? girl :boy } style={{width:"75px"}}/></div> <div className='w-[70%] h-full flex flex-col p-4 justify-between'><h2>{member.name}</h2><div className='w-full h-11 rounded-lg bg-slate-600 text-center align-middle'>{member.job}</div></div> </div>

            })}
            </div>
        </div>
   </div>
   
   </div>
  )
}

export default About