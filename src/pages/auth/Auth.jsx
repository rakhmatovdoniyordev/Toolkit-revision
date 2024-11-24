import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const token = useSelector(state => state.token.token)
    const user = token
  return user ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Auth