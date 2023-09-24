import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import AboutPage from './components/pages/About';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Resources from './components/pages/Resources';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Parents from './components/pages/Parents';
import Class10 from './components/pages/Class10';
import Class12 from './components/pages/Class12';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Navbar />
        <Routes>
          <Route path="/About" element={<AboutPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/class10" element={<Class10 />} />
          <Route path="/class12" element={<Class12 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
