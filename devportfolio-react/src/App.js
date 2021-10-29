import React from 'react';
import "tailwindcss/tailwind.css"
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Skills />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
