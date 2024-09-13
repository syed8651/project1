import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import MyProfile from "./pages/MyProfile"
import Login from "./pages/Login"
import MyAppointments from "./pages/MyAppointments"
import Doctors from "./pages/Doctors"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
