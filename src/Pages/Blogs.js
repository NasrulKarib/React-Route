import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {data} from './Blogdata'
import '../App.css'

const Blog = () => {
  const navigate = useNavigate()
  
  const [blog, setData]= useState(data)

  const truncate = (str, num) =>{
    if(str.length > num){
      return str.slice(0,num) + "..."
    }
    else return str;

  }
  return (
    <div >
      <h1 className='title'>This is blog page</h1>
      <div className= "section">
        {blog.map(value =>{
          const {id, title, desp} = value;
          return (
          <div className="article">
            <h2 style={{color:'green'}}>{title}</h2>
            <p className='para'>{truncate(desp, 100)}</p>
            <Link to ={title} state ={{desp}}>Learn more</Link>
          </div>)
        })}
      </div>
      
    <button className ='button' onClick={() => navigate('/')}>Go to home page</button>
    </div>



  )
}

export default Blog
