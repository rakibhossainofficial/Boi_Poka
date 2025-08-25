import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'

const root = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default root
