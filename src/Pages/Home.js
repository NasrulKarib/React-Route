import React,{useContext} from 'react'
import { BlogContext } from '../Components/BlogContext';

const Home = () => {

  const {isLoggedIn, changeLoggin} = useContext(BlogContext);
  return (
    <div style={{textAlign:'center'}}>
      <h1 className='title'>This is home page</h1>
      {isLoggedIn ? (
        <button className='button' onClick={() => changeLoggin(isLoggedIn)}>Log Out</button>
      ) : (
        <button className='button' onClick={() => changeLoggin(isLoggedIn)}>Log In</button>
      )}
    </div>
  )
}

export default Home
