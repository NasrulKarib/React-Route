import React,{useState,useContext} from 'react'
import { BlogContext } from '../Components/BlogContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlogs = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const {addBlog}= useContext(BlogContext);

const handleSubmit = (e) => {
    e.preventDefault();
    const data = {id: new Date().getTime().toString(), title, desp: description};
    addBlog(data);
    setTitle('');
    setDescription('');
    toast.success('Added Successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
};
  return (
    <div className="App">
    <header className="App-header">
      <h1 className="title">Add Blog Post</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        ></textarea>
        <button type="submit" className="button">Submit</button>
        <ToastContainer />
      </form>
    </header>
  </div>
  )
}

export default AddBlogs
