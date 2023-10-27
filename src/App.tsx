import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './tailwind.css'
import Footer from './components/footer/Footer'
import Navbar from './components/nabar/Navbar'
import Home from './pages/home/Home'
import AboutUs from './pages/about/AboutUs'
import Contact from  './pages/contactNous/Contact'
import Blogdetail from './pages/blog/blogdetail/Blogdetail'
import Main from './pages/blog/Main'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contactNous' element={<Contact />} />
          <Route path='/blog' element={<Main />} />
          <Route path="/blogdetail/:postId" element={<Blogdetail/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
