import React from 'react'
import { useLoaderData } from 'react-router-dom'
export const Github = () => {
    const data = useLoaderData()
    // const [data, setData]=React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Sonali1502-Sona')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}</div>
      <img src={data.avatar_url} alt="profile" className='w-40 h-40 rounded-full mx-auto'/>
    </>
  )
}

export default Github
export const githubLoader = async() => 
{
    const response = await fetch('https://api.github.com/users/Sonali1502-Sona')
    const data = await response.json()
    return data
}