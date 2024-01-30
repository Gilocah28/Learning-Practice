import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StateComponents from './components/StateComponents'
import PropsComponent from './components/Props/PropsComponent'
import LikedComponent from './components/Challenges/LikedComponent'
import ExpandableTextComponent from './components/Challenges/ExpandableText/ExpandableTextComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StateComponents/> */}
      {/* <PropsComponent /> */}
      {/* <LikedComponent onClick={() => console.log('Liked Success')}/>
       */}

      <ExpandableTextComponent maxChar={20}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem reiciendis quidem eius,
        aut ipsum repellendus itaque? Odio dolor
        laudantium debitis in et aperiam,
        fuga quaerat architecto. Quasi dolorem at aperiam?
      </ExpandableTextComponent>
    </>
  )
}

export default App
