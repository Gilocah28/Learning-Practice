import React, { useState } from 'react'
import ChildComponents from './ChildComponents'

const PropsComponent = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1)
    }


    return (
        <div>
            <ChildComponents count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </div>
    )
}

export default PropsComponent
