import React from 'react'
import {BrowserRouter as Router , Routes , Route}from "react-router-dom"
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import SignHome from './components/Home/SignHome'
import LoginHome from './components/Home/LoginHome'
import GoogleHome from './components/Home/GoogleHome'
import FbHome from './components/Home/FbHome'
import GhHome from './components/Home/Gh'
const App = () => {
  return (
   <div>
      <Router >
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signHome' element={<SignHome />}/>
          <Route path='/loginHome' element={<LoginHome />}/>
          <Route path='/GoogleHome' element={<GoogleHome />}/>
          <Route path='/fbhome' element={<FbHome />}/>
          <Route path='/Ghhome' element={<GhHome />}/>
        </Routes>
      </Router>
   </div>
  )
}

export default App