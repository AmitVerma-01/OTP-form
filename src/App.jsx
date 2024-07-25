
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import OtpValidation from './pages/OtpValidation'
import Navbar from './components/Navbar'
import DragDropCards from './pages/DragDropCards'
import DataTable from './pages/DataTable'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<OtpValidation/>}/>
        <Route path='/otpVarificationPage' element={<OtpValidation/>}/>
        <Route path='/DragDropCards' element={<DragDropCards/>}/>
        <Route path='/DragDropCards' element={<DataTable/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
