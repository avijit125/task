import axios from 'axios'
import React,{useState} from 'react'

const List = () => {
    const [ input, setInput] = useState("india")
    let apiInput = `https://restcountries.com/v2/name/${input}`
    const apiCall = async(apiInput)=>{
        await axios.get(apiInput).then(res=>{console.log(res)})
    }
    const handleChange =(e)=>{
        e.preventDefault();
        setInput(e.target.value)
    }
    return (
        <div>
            
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input value={input} onChange={handleChange} type="text" class="form-control" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button onClick={()=> apiCall(apiInput)} class="btn btn-primary">Submit</button>
            
        </div>
    )
}

export default List
