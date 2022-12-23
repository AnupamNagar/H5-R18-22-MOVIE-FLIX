import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
    </Routes>
    </>
  )
}

export default App

