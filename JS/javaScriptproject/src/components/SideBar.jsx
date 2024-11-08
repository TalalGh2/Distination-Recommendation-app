import React from 'react'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.webp'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.webp'
const SideBar = () => {
    const paths = [twitter,facebook,instagram,youtube]
  return (
    <div className='z-10'>
        <div className='h-full w-24 flex flex-col justify-between p-6 items-center'>
        <div className='w-[1px] h-72 bg-white select-none rounded-2xl'></div>
        <ul>{paths.map((img)=>{return <li title={`${img}`} className='my-6 cursor-pointer hover:scale-[1.2] transition active:scale-[1.3]' key={img}><img src={img} alt='img'/></li>})}</ul> 
        </div>
    </div>
  )
}

export default SideBar