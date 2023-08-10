import React from 'react'
import {Outlet} from 'react-router-dom'
import { Footer, Navbar } from '../../components/components'

export default () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}