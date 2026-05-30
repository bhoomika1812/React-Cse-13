import { useState } from 'react'
import React from 'react'
import './Exp_8.css'

function Exp_8() {

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

  return (
    <div>
      <h2>React Counter Application</h2>
      <h2>{count}</h2>
      <button onClick={increment}>INCREMENT</button><br></br>
      <button onClick={decrement}>DECREMENT</button><br></br>
      <button onClick={reset}>RESET</button><br></br>
    </div>
  )
}

export default Exp_8
