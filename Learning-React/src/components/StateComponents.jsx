import React, { useState } from 'react'

const StateComponents = () => {

  const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState(['Manggo', 'Tomatoe', 'Apple', 'Banana', 'Durian'])
  const [checked, setChecked] = useState(false)
  const [addFruit, setAddFruit] = useState('Orange')

  // const handleIncrement = () => {
  //   isCount(prevState => prevState + 1)
  // }

  // const handleDecrement = () => {
  //   isCount(prevState => prevState - 1)
  // }

  const handleShowFruits = () => {
    setChecked(!checked)
  }

  const handleAddFruit = () => {
    setFruits([...fruits, addFruit])
  }

  const handleRemove = (fruitIndex) => {
    const filteredFruits = fruits.filter((fruits, index) => index !== fruitIndex)
    setFruits(filteredFruits)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>

      <hr />


      <div>
        <label>Show</label>
        <input type="checkbox" onChange={handleShowFruits} checked={checked} />
      </div>

      <button onClick={handleAddFruit}>Add Fruit</button>

      <ul className='list-group'>
        {checked && fruits.map((fruit, index) => {
          return (
            <div key={index}>
              <li className='list-group-item'>{fruit}</li>
              <button className='btn btn-danger' onClick={() => handleRemove(index)}>Remove</button>
            </div>
          )
        })}
      </ul>

    </div>
  )
}

export default StateComponents
