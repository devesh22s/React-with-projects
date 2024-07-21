import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  {/*  we add outlet here because to rendering the inner elements inside the layout that is described in main.js file*/}
    <Footer />
    </>
  )
}

export default Layout