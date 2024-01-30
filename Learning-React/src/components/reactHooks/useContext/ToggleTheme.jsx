import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    

    return (
        <div>
            <h1>{theme}</h1>
            <button onClick={() => toggleTheme()}>Toggle</button>
        </div>
    )
}

export default ToggleTheme
