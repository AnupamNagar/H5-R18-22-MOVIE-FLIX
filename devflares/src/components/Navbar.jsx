import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full absolute flex flex-col items-center justify-between p-4 z-[100] md:flex-row space-y-4 '>
        <Link to='/'><h1 className='text-red-600 text-4xl font-bold cursor-pointer '> MOVIEFLIX</h1></Link>
        <div className='' >
            <Link to='/login'><button className='text-white pr-4 cursor-pointer hover:scale-110 delay-150 duration-300'>Sign In</button></Link>
            <Link to='/signup'><button className='bg-red-600  px-4 py-2 cursor-pointer text-white rounded  hover:scale-110 delay-150 duration-300'>Sign Up</button></Link>
        </div>

    </div>
  )
}

export default Navbar
