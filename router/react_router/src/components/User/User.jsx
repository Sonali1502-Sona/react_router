import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
  const { id } = useParams()
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">User Profile</h1>
        <p className="mt-4 text-xl text-gray-600">ID: <span className="font-semibold text-orange-700">{id}</span></p>
      </div>
    </div>
  )
}

export default User