import React from 'react'
import { useState } from 'react'
import DistenationCard from './DistenationCard'
const SearchBar = ({search,setsearch}) => {

  return (
    <div className='w-full h-full'>
        <div className='bg-white rounded-3xl w-full h-full flex select-none items-center gap-6 z-11'>
         <input value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search' className='w-[60%] border-none rounded-3xl text-black outline-none overflow-hidden pl-5'></input>
         <button className='bg-slate-700 h-10 w-16 rounded-lg hover:scale-[1.06] transition-all active:scale-[1]'>Search</button>
         <button className='bg-slate-700 h-10 w-16 rounded-lg hover:scale-[1.06] transition-all active:scale-[1]'>Clear</button>
       </div>{console.log(search)}
    </div>
  )
}

export default SearchBar