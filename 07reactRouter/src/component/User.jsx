import React from 'react'
import { useParams } from 'react-router-dom'  // parmas helps us to provide the data from the main url to web screen

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User