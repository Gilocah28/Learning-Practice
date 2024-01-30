import React, { useContext } from 'react'
import ThemeProvider from './ThemeProvider'
import ToggleTheme from './ToggleTheme'
import ThemeContext from './context/ThemeContext'

const ParentContext = () => {
    
    return (
        <ThemeProvider>
            <div><h1>Theme Provider</h1></div>
            <ToggleTheme />
        </ThemeProvider>
    )
}

export default ParentContext
