import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'

function Routing() {
  return (
    <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/admin" element = {<AdminPage />} />
      <Route path = "/user" element = {<UserPage />} />
    </Routes>
  )
}

export default Routing