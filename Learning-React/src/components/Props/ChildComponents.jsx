import React from 'react'

const ChildComponents = ({ count, handleIncrement, handleDecrement }) => {

    // My Methods of props
    // const handleIncrement = () => {
    //     setCount((prevState) => prevState + 1)
    // }

    // const handleDecrement = () => {
    //     setCount((prevState) => prevState - 1)
    // }


    return (
        <div>
            <h1>Count: {count}</h1>
            <button className='btn btn-success' onClick={() => handleIncrement()}>Increment</button>
            <button className='btn btn-danger' onClick={() => handleDecrement()}>Decrement</button>
        </div>
    )
}

export default ChildComponents
