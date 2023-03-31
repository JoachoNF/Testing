import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardContainer from './CardContainer'

const Main = () => {
  return (
    <Routes>
        <Route path='/Exoplanetas' element={<CardContainer/>}/>
    </Routes>
  )
}

export default Main