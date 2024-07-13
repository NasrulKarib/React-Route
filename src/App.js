import React,{useContext} from 'react';
import { BlogContext } from './Components/BlogContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import User from './Pages/User';
import AddBlogs from './Pages/AddBlogs';
import Protected from './Components/Protected';

import './App.css';

function App() {
 const {isLoggedIn}= useContext(BlogContext);
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path='/blogs/:title' element = {<Blog />}/>
          <Route path='/blogs' element = {<Blogs />}/>
          <Route path='/addblog' element = {
              <Protected isLoggedIn={isLoggedIn}>
                <AddBlogs/>
              </Protected>
            } />
          <Route path='/user' element = {<User/>}/>
          <Route path='*' element = {<Error />}/>
        </Routes>
      </Router>
  );
}

export default App;
