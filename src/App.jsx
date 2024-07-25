
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import OtpValidation from './pages/OtpValidation'
import Navbar from './components/Navbar'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<OtpValidation/>}/>
        <Route path='/otpVarificationPage' element={<OtpValidation/>}/>
        <Route path='/DragDropCards'/>
        <Route path='/DragDropCards'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
