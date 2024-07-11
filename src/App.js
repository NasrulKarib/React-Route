import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import User from './Pages/User'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/blogs/:title' element = {<Blog />}/>
        <Route path='/blogs' element = {<Blogs />}/>
        <Route path='/user' element = {<User/>}/>
        <Route path='*' element = {<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
