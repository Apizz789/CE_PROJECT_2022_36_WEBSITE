import logo from './logo.svg';
import './App.css';
import React from 'react';

import Admin_home from './component/Admin_home';
import Announment from './component/Announment';
import Community from './component/Community';
import Overview from './component/Overview';
import Profile from './component/Profile';
import Users from './component/Users';
import Login from './component/Login';
import Challenge from './component/Challenge';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div>
     
      <Routes>
     
        <Route path="/" element={<Admin_home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Announment" element={<Announment />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Challenge" element={<Challenge />} />
        
      </Routes>
    </div>
  );
}

export default App;
