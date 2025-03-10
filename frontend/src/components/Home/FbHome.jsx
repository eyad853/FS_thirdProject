import React from 'react'
import { FaFacebookF } from "react-icons/fa6";


const FbHome = () => {
  return (
    <div className='w-screen p-10 text-white h-screen bg-gradient-to-t from-slate-950 to-yellow-200 flex justify-center items-center'>
        <div className='h-72  p-10 bg-slate-950/45 text-xl font-bold  rounded-xl w-120 flex justify-center items-center'>
            authentication has been done successfully with google <FaFacebookF />
        </div>
    </div>
  )
}

export default FbHome