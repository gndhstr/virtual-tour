import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home, Menu } from '../../pages/pages'
import WithNav from './withNav'
import WithoutNav from './withoutNav'


const routes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route element={<WithNav/>}>
        <Route path='/explore' element={<Menu/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default routes