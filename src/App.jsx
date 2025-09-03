import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import BasicLayout from "./layout/Basiclayout";
import Signin from './Pages/SignIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout><Home /></BasicLayout>} />
      <Route path='/signin' element={<BasicLayout><Signin /></BasicLayout>} />


    </Routes>
  )
}

export default App;
