import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
 
        <Navbar />
        <AnimatedRoutes />
        <Footer />
   
    </div>
  );
}

export default App;
