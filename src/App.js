import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Booking from './Pages/Booking';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import {Route, Routes} from "react-router-dom";

  function App() {
    return (
      <>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
      </>
    )
  }

export default App;