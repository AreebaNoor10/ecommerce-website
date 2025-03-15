import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import LoadingBar from './components/LoadingBar'
import JewelryShowcase from './components/JewelryShowcase'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]'>
      <LoadingBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
