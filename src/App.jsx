
import './App.css'
import Home from './assets/Pages/Home'
import {ToastContainer} from "react-toastify"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './assets/Components/item'
function App() {

  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<Item/>}/>
      </Routes>
           
    </BrowserRouter>

      <ToastContainer/>
    </>
  )
}

export default App
