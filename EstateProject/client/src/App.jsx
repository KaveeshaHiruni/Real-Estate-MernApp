import React from 'react';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signout from './components/Signout';
import About from './components/About';
import Header from './pages/Header';


export default function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/profile' element={<Profile/>}> </Route>
          <Route path='/signin' element={<Signin/>}> </Route>
          <Route path='/signout' element={<Signout/>}> </Route>
          <Route path='/about' element={<About/>}> </Route>
        </Routes>  
      </BrowserRouter>
  )
}
