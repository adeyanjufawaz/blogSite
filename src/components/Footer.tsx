import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='grid gap-16 p-16 bg-[rgba(235,202,208,.7)] grid-cols-1 items-start justify-center lg:grid-cols-4'>
      <Link to="/">
          <h2 className="self-start font-bold text-[#543EE0] text-[2rem] uppercase ">chatter</h2>
      </Link>
      <div className='flex flex-col min-h-[150px]'>
        <h2 className='mb-8 font-bold'>Explore</h2>
        <p className='mb-4 font-normal '>Community</p>
        <p className='mb-4 font-normal '>Treding blogs</p>
        <p className='mb-4 font-normal '>Chatter for teams</p>
      </div>
      <div className='flex flex-col min-h-[150px]'>
        <h2 className='mb-8 font-bold'>Support</h2>
        <p className='mb-4 font-normal '>support docs</p>
        <p className='mb-4 font-normal '>join slack</p>
        <p className='mb-4 font-normal '>Contact</p>
      </div>
      <div className='flex flex-col min-h-[150px]'>
        <h2 className='mb-8 font-bold'>Official blog</h2>
        <p className='mb-4 font-normal '>Official blog</p>
        <p className='mb-4 font-normal '>Engineering blogs</p>
      </div>
    </div>
  )
}

export default Footer