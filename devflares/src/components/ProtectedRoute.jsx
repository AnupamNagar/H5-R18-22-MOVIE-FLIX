import React from 'react'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function ProtectedRoute() {
    const {user} = userAuth();
    if(!user){
        return <Navigate to='/login' />
    }
    else{
        return <Navigate to='/' />
    }

}

export default ProtectedRoute
