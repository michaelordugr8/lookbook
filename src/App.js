import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React, { useState } from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore';
import InBox from './pages/Inbox';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <main className='main-content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/log-in' element={<LogIn />}/>
            <Route path='/explore' element={<Explore />}/>
            <Route path='/direct/inbox' element={<InBox />}/>
            <Route path='/profile' element={<Profile />}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App;
