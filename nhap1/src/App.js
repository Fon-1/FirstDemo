
import React, { useState } from 'react';
import CreatePassword from "./Login/CreatePassword"
import LoginEP from "./Login/LoginEP"
import ForgetPassword from './Login/ForgetPassword';

import Nhap from './Login/nhap';
import OTP from "./Login/OTP";
import PasswordInput from './Login/PasswordInput';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginEP />} />
          <Route path="/create-new-password" element={<CreatePassword />} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route path="/nhap" element={<Nhap/>} />
          <Route path="/test" element={<PasswordInput/>} />
          <Route path="/otp" element={<OTP/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
