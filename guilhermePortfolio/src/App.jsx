import { useState } from 'react'
import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import MyStack from './MyStack.jsx'
import Projects from './Projects.jsx'
import Experiences from './Experiences.jsx'
import Footer from './footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AboutMe/>
      <MyStack/>
      <Projects/>
      <Experiences/>
      <Footer/>
    </>
  )
}

export default App
