import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeList from './employees/EmployeeList'
import Navigation from './template/navigation'
import AddEmployee from "./employees/AddEmployee";

function App() {
  return (
    // use npm i react-router-dom to use browser router
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<EmployeeList/>} />
          <Route path="/add" element={<AddEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
