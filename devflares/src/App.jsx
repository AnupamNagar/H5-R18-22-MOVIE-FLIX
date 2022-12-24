import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
     <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route 
          path = '/profile'
          element = {
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </>
   
  )
}

export default App

