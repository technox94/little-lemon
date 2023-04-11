import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header';
import Main from './components/Main';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <Nav />
    <Header />
    <Main />
    <Testimonials />
    <About />
    <Footer />
    </Router>
  )
}

export default App