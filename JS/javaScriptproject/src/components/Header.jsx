import React from 'react'
import SearchBar from './SearchBar'
import { useState } from 'react'
const Header = ({navbar,setnavbar,search,setsearch}) => {
    const nav = ['Home',"About","contact Us"]
    
  return (
    <div className='flex w-full h-20 bg-slate-800 justify-between text-white p-3 fixed z-10'>
    <div className='justify-start flex items-center w-full text-2xl font-bold'><h1>Travel Bloom</h1></div>
    <div className='justify-start flex items-center w-full' > <ul className='flex gap-24'>{nav.map((elem)=>{
       return <li className={`hover:text-slate-500 transition-all cursor-pointer select-none ${navbar===elem ? 'text-slate-300 scale-[1.3]':'text-white'}`} onClick={()=>{setnavbar(elem)}}>{elem}</li>
    })}</ul></div>

    <div className='justify-center flex items-center w-full'><SearchBar search={search} setsearch={setsearch}/></div>
   
    </div>
  )
}

export default Header