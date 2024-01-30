import React, { useState } from 'react'

const ExpandableTextComponent = ({ children, maxChar }) => {
    const [showFullText, setShowFullText] = useState(false)

    const text = showFullText ? children : children.substring(0, maxChar)

    if(children.length <= maxChar) return <div>{children}</div>

    const handleShowText = () => {
        setShowFullText(!showFullText)
    }

    return (
        <div>
            {text}...
            <button onClick={handleShowText}>{showFullText ? 'Less' : 'More'}</button>
        </div>
    )
}

export default ExpandableTextComponent
