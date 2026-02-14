import { useState } from 'react'
import EmployeeList from './employees/EmployeeList'
import Navigation from './template/navigation'

function App() {
  return (
    <>
      <Navigation/>
      <EmployeeList/>
    </>
  )
}

export default App
