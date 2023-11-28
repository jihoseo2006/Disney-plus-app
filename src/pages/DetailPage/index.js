import axios from '../../api/axios';
import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  let {movieId} = useParams();
  const [movie , setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      console.log("response", response)
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])

  if(!movie) return null
  
  return (
    <section>
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='modal__poster-img'
      />
    </section>
  )
}

export default DetailPage