import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState(101);
  const [age, setAge] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  /*
    useSearchParam:
        ~ It is used to read and modify the query parameters of the URL in a React component. 
        ~ Easily read and update URL query parameters.
        ~ Maintain state through URL parameters, making it shareable and bookmarkable.
        ~ Handle routing based on query parameters.
  */
  const handleSubmit =(e) =>{
    e.preventDefault();
    setSearchParam({name : name, id : id, age: age});
  }
  return (
    <div>
     <form onSubmit={handleSubmit}> 
        <input 
        style = {{margin:'5px', height:'3vh', padding:'2px'}}
        placeholder='Add Name'
        value = {name} 
        onChange = {(e) =>
        setName(e.target.value)
        }/>
        <input 
        style = {{margin:'5px', height:'3vh', padding:'2px'}}
        placeholder='Add Age'
        value = {age} 
        onChange = {(e) =>
        setAge(e.target.value)
        }/>
        <button className='button' type = 'submit'>Find user</button>
     </form>
    </div>
  )
}

export default User
