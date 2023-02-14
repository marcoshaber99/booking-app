import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <div className='p-4'>
       <Header />

       {/* outlet-defines where child components will be */}
       <Outlet />

    </div>
  )
}

export default Layout