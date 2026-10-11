import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';
import Features from './Components/Features';
import Testimonals from './Components/Testimonals'


const App = () => {
  return (
  <>
   <Navbar/>
   <Hero/>
   <About/>
   <Features/>
   <Testimonals/>
   <Footer/>
  </>
  )
}

export default App;