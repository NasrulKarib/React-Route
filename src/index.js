import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BlogProvider } from './Components/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BlogProvider>
      <App />
  </BlogProvider>
);

