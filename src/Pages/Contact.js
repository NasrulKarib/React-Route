import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const navigate = useNavigate();
  return (
    <div >
      <h1 className='title'>This is Contact page</h1>
      <p className='para'>A contact page serves as a vital communication bridge between a website and its visitors, offering multiple ways to get in touch, such as a contact form, email address, phone number, and social media links. By including a map for easy location finding and providing clear instructions and accessible design, a well-crafted contact page enhances user experience and ensures effective and efficient communication.</p>
      <div style={{display:'flex', justifyContent:'center'}}>
        <button className='button' onClick={() => navigate('/')}>Go to homepage</button>
      </div>
    </div>
  )
}

export default Contact
