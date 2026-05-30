import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student' //exp 7

 //    http://localhost:5173/
 
function App() {

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


  {/*
    exp 8
  const [count, setCount] = useState(0)
  const increment =()=> {
    setCount (count+1)
  }
  const decrement =()=> {
    setCount (count-1)
  }
  const reset =()=> {
    setCount (0)
  }
  */}

  // Local:   http://localhost:5173/
  return (

    <div>

      {/* exp 9 
      <h1>Registration form</h1>
      <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
      <input type="text" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
      <input type="text" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <button onClick={show}>Submit</button>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{password}</h2>
      */}


      {/*
      exp 8
      <h2>React Counter Application</h2>
      <h2>{count}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      */}

      {/*
      exp 7
      <h2>Student information</h2>
      <Student name="Raj" course="B.Tech" marks="50"/>
      <Student name="Raj" course="M.Tech" marks="40"/>
      <Student name="Ram" course="B.Tech" marks="90"/>
      <student/>
      */}

      {/*  
    <p>Welcome to my web page</p>
    <p>Hello</p>
    <h2>Cse 13</h2>
    <img src="https://images.pexels.com/photos/14430742/pexels-photo-14430742.jpeg" width="500" height="500"></img>
    <br></br>

    <button>Click Me</button>

    <iframe src="https://www.youtube.com/embed/HJJaMENwZ1I" allowFullScreen></iframe>
    <iframe src="https://www.youtube.com/embed/y_GVDbfaiwQ" allowFullScreen></iframe>

    <audio controls>
      <source src="" type="audio/mp3/"></source>
    </audio>

    <video controls>
      <source src="" type="video/mp4/"></source>
    </video>
    */}

    
    </div>
  )
}

export default App
