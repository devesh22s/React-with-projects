import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'  // it help us to pre-cache any assets in memory, such as images or 3D models for later use in the scene

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}

    <img src={data.avatar_url} alt="Git picture" width={300} />
    <h1 className='py-9'>{data.location}</h1>
    <h1>{data.bio}</h1>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/devesh22s')
    return response.json()
}