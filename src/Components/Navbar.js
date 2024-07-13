import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav>
        <NavLink to = '/' style={{fontFamily:'Trebuchet MS'}}>Home</NavLink>
        <NavLink to = '/contact' style={{fontFamily:'Trebuchet MS'}}>Contact</NavLink>
        <NavLink to = '/blogs' style={{fontFamily:'Trebuchet MS'}}>Blog</NavLink>
        <NavLink to = '/user' style={{fontFamily:'Trebuchet MS'}}>User</NavLink>
    </nav>
  )
}

export default Navbar

/* 
    Link - The Link component is used to create navigable links that allow users to navigate between different routes in your application without causing a page reload. 
    NavLink - The NavLink component is an extension of Link that provides additional styling capabilities based on whether the link is active or not.

*/