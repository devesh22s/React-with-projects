import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setcounter] = useState(15);
  const addValue = () =>{
    if(counter < 20){
    // console.log("value added!!", Math.random());
    counter += 1;
    setcounter(counter)
    }
  }

  function removeValue(){
    if(counter >15){
    setcounter(counter-1);
    }
  }


  return (
    <>
      <h1>react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button> <br/>
      <button onClick={removeValue}>decrease value</button>
      
    </>
  )
}

export default App
