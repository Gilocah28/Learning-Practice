import React, { useEffect, useRef, useState } from 'react'

const FormComponent = () => {
    const inputRef = useRef()
    const [task, setTask] = useState('')

    const [taskList, setTaskList] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();

        if (task) {
            setTaskList([...taskList, task])
            setTask('')
        } else {
            setError('Task must not be empty!!')
            inputRef.current.focus()

            setTimeout(() => {
                setError('')
            }, 5000);
        }
    }





    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <div className='border p-4'>
                <h1 className='text-center mb-4'>Task App</h1>

                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type="text"
                            ref={inputRef}
                            className='form-control'
                            placeholder='Enter a task'
                            value={task}
                            onChange={(event) => setTask(event.target.value)}
                        />
                        {error ? <p className='text-danger mt-2'>{error}</p> : null}
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <button type='submit' className='btn btn-primary'>Add Task</button>
                    </div>
                </form>

                <ul className='list-group mt-4'>
                    {taskList.map((task, index) => {
                        return (
                            <li key={index} className='list-group-item'>{task}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FormComponent
