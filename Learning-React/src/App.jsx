import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StateComponents from './components/StateComponents'
import PropsComponent from './components/Props/PropsComponent'
import LikedComponent from './components/Challenges/LikedComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StateComponents/> */}
      {/* <PropsComponent /> */}
      <LikedComponent/>
    </>
  )
}

export default App
