import React from 'react'
import SideBar from '../components/SideBar'
import DistenationCard from '../components/DistenationCard'
import { useState } from 'react'
const Home = ({search}) => {
    
  return (
    <div className='w-full h-full mt-20 flex flex-row z-10'>
     <SideBar />
    <div className='w-full h-full flex justify-center p-11 text-white items-start flex-col gap-10'>
        <h1 className='text-5xl font-bold'>Explore <br/>Dream<br/> Destination</h1>
        <p className='bg-black/60 p-10 z-10'>A destination website is an online platform designed to provide users with comprehensive information and resources about a specific location, such as a city, country, or tourist destination. These websites typically feature details on attractions, accommodations, dining options, activities, and local culture, offering visitors everything they need to plan their trip. Often, destination websites include interactive maps, travel guides, booking options, and practical tips to enhance the travel experience. Whether you're looking for a relaxing beach getaway or an adventure in the mountains, a well-designed destination website serves as a one-stop hub for all things related to travel, ensuring that users can make informed decisions and explore new places with ease.</p>
        <button className='bg-slate-500 h-14 w-56 rounded-lg hover:bg-slate-700 transition-all active:scale-[0.97]'>Book now</button>
    </div>
    <div className='absolute left-[1000px] -top-10'><DistenationCard search={search}/></div>
    </div>
  )
}

export default Home