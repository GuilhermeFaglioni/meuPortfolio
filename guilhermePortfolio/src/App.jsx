import { useState } from 'react'
import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import MyStack from './MyStack.jsx'
import projetos from './projetos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AboutMe/>
      <MyStack/>
      <projetos/>
    </>
  )
}

export default App
