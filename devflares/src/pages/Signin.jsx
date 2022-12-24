import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'
import {FcGoogle} from 'react-icons/fc';

function Signin() {
    const [email , setEmail] = useState('');
    const [password , setPassword ]  = useState('');
    const {user , login} = userAuth();
    const navigate = useNavigate();

    const handlelogin = async (e) =>{
        e.preventDefault();
        try{
            await login(email , password);
            navigate("/");
        }catch(err){
            alert(err.message);
        }
    };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col ">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full mt-8">
                        <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                        
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange= {(e)=> setEmail(e.target.value)} />
    
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange = {(e)=> setPassword(e.target.value)} />

                      
                        
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-white bg-red-600 hover:bg-green-dark focus:outline-none my-1"
                            onClick={handlelogin}
                        >Login</button>
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-white bg-red-600  hover:bg-green-dark focus:outline-none my-1"
                            onClick={handlelogin}
                        >Sign In With Google </button>
    
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
