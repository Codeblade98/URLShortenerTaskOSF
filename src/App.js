import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Teams from "./pages/Teams"
import Premium from "./pages/Premium"
import Navbar from "./components/Navbar"
import Contact from './pages/Contact';


function App() {
  return(
    <>
    <Navbar style={{height: 100}}/>
    <Routes>
      {/* pages  */}
      <Route path="/" element={(<Home />)} />
      <Route path="/login" element={(<Login />)} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
