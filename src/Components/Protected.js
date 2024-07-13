import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({isLoggedIn, children}) => {
  if(!isLoggedIn){
      alert('Log in first')
      return <Navigate to='/' replace />
  }
  return children;
}

export default Protected;
