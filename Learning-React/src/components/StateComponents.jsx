import React, { useState } from 'react'

const StateComponents = () => {

  const [count, setCount] = useState(0)

  // const handleIncrement = () => {
  //   isCount(prevState => prevState + 1)
  // }

  // const handleDecrement = () => {
  //   isCount(prevState => prevState - 1)
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
    </div>
  )
}

export default StateComponents
