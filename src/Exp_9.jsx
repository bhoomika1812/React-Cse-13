
import { useState } from 'react'
import './Exp_9.css'

function Exp_9() {
    
    const[name, setName]=useState(" ")
    const [email, setEmail]=useState(" ")
    const [password, setPassword]=useState(" ")
    
    function show() {
        if (name===" "|| email===" " || password===" ") {
          alert("please fill details")
        }
        else {
          alert ("registered")
        }
      }
    
  return (
    <div>
      <h1>Registration form</h1>
      <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}></input><br></br>

      <input type="text" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
      
      <input type="text" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{password}</h2>

      <button onClick={show}>Submit</button>
    </div>
  )
}

export default Exp_9
