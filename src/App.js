import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";




// GSAP

function App() {
  return (
  <BrowserRouter>
  <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  )
}
export default App;