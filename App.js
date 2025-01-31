import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/login/Login'; 
import Class1 from './Component/Teachersection/Class1';
import Heading from './Component/Header/Heading';
import Teacher from './Component/Teachersection/Teacher';
import Timetable from './Component/Teachersection/Timetable';
import Profile from './Component/Teachersection/Profile';
import Contact from './Component/Teachersection/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Class1" element={<Class1 />} />
        <Route path="/Profile" element={<Profile></Profile>} />
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Heading" element={<Heading />} />
        <Route path='/Timetable'element={<Timetable></Timetable>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
