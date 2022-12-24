import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function Navbar() {
    const {user , logout} = userAuth();
    const navigate = useNavigate();

    const handlelogout = async (e) =>{
        e.preventDefault();
        try{
            await logout();
            navigate("/login");
        }catch(err){
            alert(err.message);
        }
    }

  return (
    <div className='w-full absolute flex flex-col items-center justify-between p-4 z-[100] md:flex-row space-y-4 '>
        {/* {
          user?.email ?(
            <Link to='/'><h1 className='text-red-600 text-4xl font-bold cursor-pointer '> MOVIEFLIX</h1></Link>
          ) : (
            <Link to='/signup'><h1 className='text-red-600 text-4xl font-bold cursor-pointer '> MOVIEFLIX</h1></Link>
          )
        } */}
        <Link to='/'><h1 className='text-red-600 text-4xl font-bold cursor-pointer '> MOVIEFLIX</h1></Link>
        
        {
          user?.email ?(
            <div className='' >
              <Link to='/profile'><button className='text-white pr-4 cursor-pointer hover:scale-110 delay-150 duration-300'>Account</button></Link>
              <button className='bg-red-600  px-4 py-2 cursor-pointer text-white rounded  hover:scale-110 delay-150 duration-300' onClick={handlelogout}>Log Out</button>
            </div>
          ) : (
            <div className='' >
              <Link to='/login'><button className='text-white pr-4 cursor-pointer hover:scale-110 delay-150 duration-300'>Sign In</button></Link>
              <Link to='/signup'><button className='bg-red-600  px-4 py-2 cursor-pointer text-white rounded  hover:scale-110 delay-150 duration-300'>Sign Up</button></Link>
            </div>
          )

        }
        

    </div>
  )
}

export default Navbar
