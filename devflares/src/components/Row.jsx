import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import requests from '../components/Requests'


function Row({title , fetchUrl , rowId}) {
    const [movies , setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl]);

  return (
    <>
    <h2 className=' font-bold text-white md:text-xl p-4'>{title}</h2>
    <div
          id={'slider' + rowId}
          className='flex w-full h-full cursor-pointer overflow-x-scroll scrollbar-hide' 
        >
            <div className=' flex w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  cursor-pointer relative p-4  '>
        {movies.map((movie) => (
            <img className= 'w-full h-auto block p-4 rounded-md hover:scale-110 delay-150 duration-300' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.name} />
        ))}
    </div>
    </div>
    </> 
  )
}

export default Row
