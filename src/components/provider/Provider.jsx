/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.config'


export const AuthContext = createContext(null)

const Provider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoadign] = useState(true)

    // go register 
    const createUser = (email,password) =>{
        setLoadign(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //ho login
    const logIn = (email,password) =>{
        setLoadign(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // go Navbar on side of login
    const logOut = () =>{
        setLoadign(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoadign(false)
        })
        return () =>{
            unSubscribe();
        }
            

    },[])

    const authInfo = {
        user,
        logIn,
        logOut,
        createUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;