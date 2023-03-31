import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExoplanetsSimple from './Exoplanets/ExoplanetsSimple'
import ExoplanetsConfirmed from './Exoplanets/ExoPConfirmed'
import ExoplanetsConfirmedMXScore from './Exoplanets/ExoPConfMXScore'

const Main = () => {
  return (
    <Routes>
        <Route path='/Exoplanetas' element={<ExoplanetsSimple/>}/>
        <Route path='/Exoplanetas/Confirmed' element={<ExoplanetsConfirmed/>}/>
        <Route path='/Exoplanetas/Confirmed/MXS' element={<ExoplanetsConfirmedMXScore/>}/>
    </Routes>
  )
}

export default Main