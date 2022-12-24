import axios from "axios";
import React, { useEffect, useState } from "react";
// import requests from '../components/Requests'

function Row({ title, fetchUrl, rowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  console.log(movies);

  return (
    <>
      <h2 className=" font-bold text-white md:text-xl p-4">{title}</h2>
      <div
        id={"slider" + rowId}
        className="flex w-full h-full cursor-pointer overflow-x-scroll scrollbar-hide"
      >
        <div className=" flex w-[300px] sm:w-[360px] md:w-[360px] lg:w-[400px]  cursor-pointer relative p-4  ">
          {movies.map((movie) => (
            <>
              <div className="flex flex-wrap">
                <div className="flex  flex-col relative w-[300px] sm:w-[360px] md:w-[360px] lg:w-[400px]">
                  <img
                    className="w-full h-auto block p-6 rounded-lg hover:scale-110 delay-150 duration-300 "
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.name}
                  />
                  <div className="absolute bottom-0">
                    <p className="text-white px-6 ">{movie.title}</p>
                  </div>
                  <div className="absolute px-8 z-10 w-[300px] sm:w-[360px] md:w-[360px] lg:w-[400px] h-[189px] sm:h-[223px] md:h-[223px] lg:h-[245px] overflow-auto bg-white rounded opacity-0 hover:opacity-100 hover:bg-opacity-100 mt-4 py-4  delay-150 duration-300 transform hover:translate scrollbar-hide">
                    <h2 className=" text-base title-font text-red-700 font-bold  ">
                      {movie.title}
                    </h2>
                    <p className="text-ellipsis">{movie.overview}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
