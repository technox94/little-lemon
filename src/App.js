import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Reservations from './Pages/Reservations';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import {Route, Routes} from "react-router-dom";





function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/reservations" element = {<Reservations />}/>
      <Route path="/confirmed" element= {<ConfirmedBooking />} />
    </Routes>
    <Footer />
  </>
);
}

export default App





