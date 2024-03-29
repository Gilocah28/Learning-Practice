import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StateComponents from './components/StateComponents'
import PropsComponent from './components/Props/PropsComponent'
import LikedComponent from './components/Challenges/LikedComponent'
import ExpandableTextComponent from './components/Challenges/ExpandableText/ExpandableTextComponent'
import UseRefComponent from './components/reactHooks/UseRefComponent'
import UseEffectComponent from './components/reactHooks/UseEffectComponent'
import ParentContext from './components/reactHooks/useContext/ParentContext'
import UseReduceComponent from './components/reactHooks/UseReduceComponent'
import FormComponent from './components/FormHandling/FormComponent'


function App() {


  return (
    <>
      {/* <StateComponents/> */}
      {/* <PropsComponent /> */}
      {/* <LikedComponent onClick={() => console.log('Liked Success')}/>
       */}

      {/* <ExpandableTextComponent maxChar={20}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem reiciendis quidem eius,
        aut ipsum repellendus itaque? Odio dolor
        laudantium debitis in et aperiam,
        fuga quaerat architecto. Quasi dolorem at aperiam?
      </ExpandableTextComponent> */}


      {/* <UseRefComponent/> */}

      {/* <UseEffectComponent /> */}

      {/* <ParentContext/> */}

      {/* <UseReduceComponent/> */}

      <FormComponent/>
    </>
  )
}

export default App
