import React from 'react'
import { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0)

    const IncrementCount = () => {
        setCount(count + 1)
    }

    const DecrmentCount = () => {
        setCount(count - 1)
    }

  return (
    <>
    <div>
        <h1>Count: {count}</h1>
    <button onClick = {IncrementCount} >Increment Count</button>
    <button onClick = {DecrmentCount}>Decrment Count </button>
    </div>
    </>
  );
}

export default UseState