import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Aboutme from '../pages/Aboutme'
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portafolio'
import Contact from '../pages/Contact'


function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Aboutme />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default RoutesIndex
