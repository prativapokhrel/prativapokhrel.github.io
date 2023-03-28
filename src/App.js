import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Expertise/>
      <Portfolio/>
      <Contact/>
      <SocialLinks />
    </div>
    
  );
}

export default App;
