import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive");

  function setcolor1(){
    setcolor("red")
  }
  function setcolor2(){
    setcolor("green")
  }

  
  
  return (
    <>
      <div className='w-full h-screen duration-20  ' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap  justify-center h-20rem top-16 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center fixed px-3 py-2  gap-3 shadow-lg bg-white rounded-3xl  '>
            <button onClick={setcolor1} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "red"}}>Red</button>
            {/* we can't do directly onlick = {setcolor("red"), because a onclick need a function in which setcolr function is called, but here onclick directly take the setcolor function and due to () it  return function's core value, due which  component re render for infinte loop, but react stop this to avoid from crash this app}, so always pass a function in on click value in which there is other function call, or any other work happened. */}
            <button onClick={setcolor2} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=>{setcolor("blue")}} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=>{setcolor("burlywood")}} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "burlywood"}}>Burlywood</button>
            <button onClick={()=>{setcolor("lavender")}} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "lavender"}}>Lavender</button>
            <button onClick={()=>{setcolor("purple")}} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={()=>{setcolor("gray")}} className='outlin-none px-3 py-1 rounded-full text-white' style={{backgroundColor: "gray"}}>Gray</button>
          </div>
        </div>
        

        
        
      </div>
      
    </>
  )
}

export default App
