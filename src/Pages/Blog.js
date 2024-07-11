import React ,{useState,useEffect}from 'react'
import {data} from './Blogdata'
import { useParams, useLocation} from 'react-router-dom'
import '../App.css'
const Blog = () => {
  const {title} = useParams();
  const location = useLocation();
  
  console.log(location.state);


  return (
    <div >
      <h1 style={{textAlign : 'center', color:'green'}}>{title}</h1>
      <p className='para'>{location.state.desp}</p>
    </div>
  )
}

export default Blog
