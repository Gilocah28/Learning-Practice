import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StateComponents from './components/StateComponents'
import PropsComponent from './components/Props/PropsComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StateComponents/> */}
      <PropsComponent />
    </>
  )
}

export default App
