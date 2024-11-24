import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Login from '../pages/login/Login'

const Router = () => {
  return (
    <>
        <Routes>
                <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Auth/>}>
                <Route element={<Layout/>}>
                    <Route path='/home' element={<Home/>}/>
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default Router