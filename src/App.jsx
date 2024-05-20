import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Exercises from './components/pages/Exercises';
import Hero from './components/pages/Hero';
import Pricing from './components/pages/Pricing';
import Start from './components/pages/Start';
import Testimonials from './components/pages/Testimonials';

function App() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
        <Header/>
        <Hero/>
        <Exercises/>
        <Start/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
    </>
  );
}

export default App;
