import React, { useRef } from 'react'

const UseRefComponent = () => {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  const handleGetValue = () => {
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <div>
      <input
        ref={inputRef}
        name='firstname'
        type="text"
        placeholder='Enter name...' />

      {/* <button
        onClick={handleFocus}
        className='btn btn-primary'>Focus on me
      </button> */}

      <button
        onClick={handleGetValue}
        className='btn btn-primary'>Get value
      </button>

    </div>
  )
}

export default UseRefComponent
