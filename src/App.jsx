import React from 'react'
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './landing_page/Home.jsx';

function App() {

    const isOwnerPath = useLocation().pathname.includes("owner");


  return (
    <>
   { !isOwnerPath && <Navbar />}
   <div className="min-h-[70vh]">
    <Routes>
        <Route path='/' element={< Home/>} />
    </Routes>
   </div>
    </>
  )
}

export default App