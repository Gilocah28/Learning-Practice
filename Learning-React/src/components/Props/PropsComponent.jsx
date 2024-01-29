import React, { useState } from 'react'
import ChildComponents from './ChildComponents'

const PropsComponent = () => {

    const [count, setCount] = useState(0)


    return (
        <div>
            <ChildComponents count={count} setCount={setCount}/>
        </div>
    )
}

export default PropsComponent
