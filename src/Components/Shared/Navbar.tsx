import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-16 shadow-xl flex cursor-pointer items-center'>
      <Link to='/home'>
        <div className="text-2xl ml-5 font-medium">Photogram</div>
      </Link>
    </div>
  )
}

export default Navbar