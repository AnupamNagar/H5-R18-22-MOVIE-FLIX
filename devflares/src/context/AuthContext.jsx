import React from 'react';
import {useContext} from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
// import { provider } from '../firebase';

const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    const [user , setUser]  = useState({});

    function signUp(email , password){
        return createUserWithEmailAndPassword(auth , email , password);
    }

    function login(email , password){
        return signInWithEmailAndPassword(auth , email , password);
    }

    function logout(){
        return signOut(auth);
    }

    useEffect(()=>{
        const unsub  = onAuthStateChanged(auth , (user)=>{
            setUser(user);
        });
        return () =>{
            unsub();
        };
    });

    return (
        <AuthContext.Provider value={{signUp , login, logout , user  }}>
            {children}
        </AuthContext.Provider>
    )
}

export function userAuth(){
    return useContext(AuthContext);
}