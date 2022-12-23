import React, { useState , useEffect } from 'react'
import axios from  'axios';
import requests from './Requests'

function Main() {
    const[movies , setMovies] = useState([])   ;
    
    const movie = movies[Math.floor(Math.random() * movies.length )];
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, []);
    // console.log(movie);


  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[600px]  absolute bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
        <div className='absolute top-[20%] w-full p-4 md:p-8'>

            <h1 className='text-3xl md:text-4xl font-bold'>{movie?.title }</h1>
            <button className='bg-gray-300 text-black border border-gray-300 px-4 py-2 rounded-md mt-4'>Play</button>
            <button className='bg-gray-300 text-black border border-gray-300 px-4 py-2 rounded-md mt-4 ml-4'>Watch Later</button>
            <p className='mt-4 text-md'>Realesed : {movie?.release_date}</p>
            <p className='mt-4 text-gray-200 text-xl'>Overview : {movie?.overview}</p>


        </div>

      </div>
    </div>
  )
}

export default Main
