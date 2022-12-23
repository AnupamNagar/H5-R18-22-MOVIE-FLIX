import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col ">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full mt-8">
                        <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                        
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
    
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
    
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-white bg-red-600 hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>
    
                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
    
                    <div class="text-white mt-6">
                        Don't have an Account? 
                        <Link to='/signup'><a class="no-underline border-b border-blue text-blue" href="../login/">
                            &nbsp;Sign up
                        </a>.</Link>
                    </div>
                </div>
            </div>
  )
}

export default Signin
