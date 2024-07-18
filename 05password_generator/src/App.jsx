import React, {useCallback, useRef, useState} from 'react'
import { useEffect } from 'react';

const App = () => {
  const [length, setlength] = useState(8);
  const [number , setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [input_password, setinput_password] = useState("");
  
  //  useRef hook --> used to pass reference

  const passwordRef = useRef();

  const password_generate = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str += "0123456789"
    }
    if(character){
      str += "!@#$%^&*~`_+-:"

    }

    for(let i =1; i<= length; i++){
      let char = Math.floor(Math.random()* str.length +1)
      pass += str.charAt(char);


    }
    setinput_password(pass);

  }, [length, number, character])

  const Copy_to_clipboard = useCallback(()=>{
    // passwordRef.current?.select();  // it is used to select all input text that needed to copy.
    // passwordRef.current?.setSelectRange(0,3)   // it is used to selected the given range text


    window.navigator.clipboard.writeText(input_password)  // it is used to copy on clipboard(that's why we use writeText to copy written  text)

  }, [input_password])
  // password_generate();   we can't call it directly because of too many reneders.

  useEffect(()=>{
    password_generate()
  },[length, number, character, password_generate])


  return (
    <>
    <div className='w-full text-orange-500 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-center'>   {/* // max-w-md -->This class is used to set the screen width as max-width: 768px */}
      <h1 className='text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
         value= {input_password}
         className='outline-none w-full py-1 px-3' 
         placeholder='password'
         readOnly
         ref = {passwordRef}/>
         <button onClick={Copy_to_clipboard} className=' bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm  gap-x-2'>
        <div className='flex items-center gap-x-1   '>
          <input type="range" 
          min={8}
          max={50} 
          value={length}
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label >length: {length}</label>
          

        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {number }
          id='numberinput'
          onChange={()=>{setnumber((prev) => !prev)
          }}/>
          <label htmlFor="number">Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {character }
          id='character'
          onChange={()=>{setcharacter((prev) => !prev)
          }}/>
          <label htmlFor="number">charaters</label>

        </div>
      </div>

      

    </div>
    

    </>
  )
}

export default App



// --------------------------------------------------------------------------------------------------------
//  made by own -->


// import React, { useCallback, useEffect, useState } from 'react'

// const App = () => {

//   const [length, setlength] = useState(8);
//   const [input_password, setinput_password] = useState("");
//   const [number, setnumber] = useState(true);
//   const [character, setcharacter] = useState(false);
  

//   const password_generate = useCallback(()=>{
    
//     let str = "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let pass = " ";
    
//     if(number){
//       str += "123456789";

//     }
//     if(character){
//       str += "!@#$%~~`";
//     }

//     for(let i  =0; i <length; i++){
//       let char = Math.floor(Math.random()* str.length +1);
//       pass += str.charAt(char)

//     }
//     setinput_password(pass)

    
//     },[length, number, character])

//     useEffect(()=>{
//       password_generate();
//     },[length, number, character])






//   return (
//     <div style={{ color: "white"}}>
//       <div className='w-full-500 text-orange-500  max-w-md mx-auto shadow-lg  rounded-xl bg-gray-500 my-8   text-center '>
//        <div className='text-3xl  px-4 py-7 '>
//         <h1 className='text-white'>Password generator </h1>
//        </div>
//        <div className='px-3 py-2 border-red-700 flex shadow rounded-lg overflow-hidden mb-4'>
//         <input 
//         type='text'
//         className='outline-none w-full py-1 px-3'
//         value={input_password}

//         readOnly
//         /> 
//         <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0 '>
//           Copy
//         </button>
      
//        </div>
//        <div className='flex p-3'>
//         <input type="range" 
//         className='bg-orange-200 '
//         min={6}
//         max={50}
//         value={length}
//         onChange={((e)=>{setlength(e.target.value)})}
//         />
//         <label>length : {length}</label>

//         <div className='px-2'>
//           <input type='checkbox'
         
//           defaultChecked = {number}
//           onChange={()=>{setnumber((prev)=> !prev)}}/>
//           <label >Numbers</label>
//         </div>
//         <div className='px-2'>
//           <input type='checkbox'
//         />
//           <label >charaters</label>
//         </div>
//        </div>
//       </div>
      
//     </div>
//   )
// }

// export default App


