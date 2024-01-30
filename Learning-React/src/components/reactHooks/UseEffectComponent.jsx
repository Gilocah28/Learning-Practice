import React, { useEffect, useRef, useState } from 'react'

const UseEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [apiData, setApiData] = useState([])
    const inputRef = useRef()


    useEffect(() => {
        console.log('Count Update')
        inputRef.current.focus()

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => setApiData(data))
    }, [])

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder='Enter name...' />
            <button onClick={handleIncrement}>Increment</button>
            <hr />
            <br />

            <ul className='list-group'>
                {apiData.map((todo) => <li key={todo.id} className='list-group-items'>{todo.title}</li>)}
            </ul>

        </div>
    )
}

export default UseEffectComponent
