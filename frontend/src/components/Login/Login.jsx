import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios"



const Login = () => {
  const navigate = useNavigate()
  const [email , setemail]=useState("")
    const [password , setpassword]=useState("")

    const handleLogin = async()=>{
      const user ={
        email,
        password
      }
      
      const response =await axios.post('http://localhost:8000/login' , user)
      if(response.data.error===false){
        navigate("/loginHome")
      }
    }


  return (
    <div className='w-screen p-10 text-white h-screen bg-gradient-to-t from-slate-950 to-yellow-200 flex justify-center items-center'>
    <div className='h-96  p-10 bg-slate-950/45  rounded-xl w-120 flex flex-col'>
      {/* first part */}
      <div className="w-full h-28 border-b pb-2 flex flex-col items-center justify-center border-gray-200">
        <div>
          Register with:
        </div>
        <div className='flex gap-3 mt-3'>
          <div className='w-32 h-9 transform transition-all duration-200 hover:scale-105 rounded-md bg-gray-500/45 px-16 flex justify-center items-center gap-2'>
            <FaGoogle />
            Google
          </div>
          <div className='w-32 h-9 transform transition-all duration-200 hover:scale-105 rounded-md bg-gray-500/45 px-16 flex justify-center items-center gap-2'>
            <FaFacebookF />
            Facebook
          </div>
          <div className='w-32 h-9 transform transition-all duration-200 hover:scale-105 rounded-md bg-gray-500/45 px-16 flex justify-center items-center gap-2'>
            <FaGithub />
            Github
          </div>
        </div>
      </div>

      {/* second part */}
      <div className='w-full flex flex-col h-32 '>
      

          {/* email */}
          <div className='w-full  h-14 flex flex-col mt-2'>
            <div>
              Email
            </div>
            <div className='flex h-full bg-gray-500/45 rounded-md'>
              <div className='w-10 h-full flex justify-center items-center'>
                <MdOutlineEmail />
              </div>
              <input 
              type="email" 
              value={email}
              onChange={({target})=>{
                setemail(target.value)
              }}
              className='w-full outline-none h-full text-sm'/>
            </div>
          </div>

          {/* password */}
          <div className='w-full  h-14 flex flex-col mt-2'>
            <div>
              Password
            </div>
            <div className='flex h-full bg-gray-500/45 rounded-md'>
              <div className='w-10 font-bold h-full flex justify-center items-center'>
                <IoLockClosedOutline />
              </div>
              <input 
              type="password" 
              value={password}
              onChange={({target})=>{
                setpassword(target.value)
              }}
              className='w-full outline-none h-full text-sm'/>
            </div>
          </div>

      </div>

      {/* third part */}
      <div className='w-full mt-9  flex-1'>
        <div className='w-full h-full flex flex-col'>
          <div
          onClick={handleLogin}
          className='w-full bg-gradient-to-b transform transition-all duration-200 hover:scale-105 from-yellow-200 to-yellow-300 h-8 rounded-md flex justify-center items-center font-bold '>
              Login
          </div>
          <div className='mx-auto mt-5 hover:text-blue-600 transition-all duration-200'>
          <p className='' href="">
              <Link to="/">don't have an account ? Signup</Link>
          </p>
          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default Login