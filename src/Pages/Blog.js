import React ,{useState,useEffect}from 'react'
import {data} from './Blogdata'
import { useParams, useLocation} from 'react-router-dom'
import '../App.css'
const Blog = () => {
  const {title} = useParams();
  const location = useLocation();
  /* useParams:
       ~ It allows you to access the parameters of the current route specified in the URL path. 
       ~ This hook can be used to retrieve the 'title' parameter from the URL.
    
    useLocation:
       ~ This hook allows you to access the current location object, containing information about the URL the app is currently displaying.
       ~ When navigating between routes, we can pass additional state data.
       ~ We can get details about the current URL, such as the pathname, search parameters, and hash.
  
  */
  console.log(location.state);


  return (
    <div >
      <h1 style={{textAlign : 'center', color:'green'}}>{title}</h1>
      <p className='para'>{location.state.desp}</p>
    </div>
  )
}

export default Blog
