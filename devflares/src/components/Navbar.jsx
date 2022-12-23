import React from 'react'

function Navbar() {
  return (
    <div className='w-full absolute flex items-center justify-between p-4 z-[100] '>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer '> MOVIEFLIX</h1>
        <div >
            <button className='text-white pr-4 cursor-pointer hover:scale-110 delay-150 duration-300'>Sign In</button>
            <button className='bg-red-600  px-4 py-2 cursor-pointer text-white rounded  hover:scale-110 delay-150 duration-300'>Sign Up</button>
        </div>

    </div>
  )
}

export default Navbar
