import './App.css'
import Home from './Components/Home'
import Gamepad from './Components/Gamepad'
import { useState } from 'react'
function App() {
  const [isPlay,setPlay] = useState(false)
  const pageRedirect = () =>{
    setPlay(true)
  }
  return (
    <>
    
     {
      !isPlay ? <Home pageRedirect={pageRedirect}/>:<Gamepad/>
     }
       
    </>
  )
}

export default App
