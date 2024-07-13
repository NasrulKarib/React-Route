import React,{useState, createContext} from "react";
import { data } from "../Pages/Blogdata";

export const BlogContext = createContext();

export const BlogProvider = ({children}) =>{
    const [blogs, setBlog] = useState(data);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const addBlog =(newBlog) =>{
        setBlog(prevBlog => [...prevBlog, newBlog]);
    }

    const changeLoggin = (isLoggedIn) =>{
        setIsLoggedIn(!isLoggedIn)
    }
    return (
        <BlogContext.Provider value = {{blogs, isLoggedIn, addBlog, changeLoggin}}>
            {children}
        </BlogContext.Provider>
    )

}