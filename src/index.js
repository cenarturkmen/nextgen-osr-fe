import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Pages/Dashboard/Dashboard';
import Adminboard from './Pages/Adminboard/Adminboard';
import CreateOSR from './Pages/CreateOSR/CreateOSR';
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import ChangePassword from './Pages/ChangePassword/ChangePassword';
import CheckYourEmail from './Pages/CheckYourEmail/CheckYourEmail';
import ForgotYourPassword from './Pages/ForgotYourPassword/ForgotYourPassword';
import NewPassword from './Pages/NewPassword/NewPassword';
import OsrDetail from './Pages/OsrDetail/OsrDetail';
import CreateProject from './Pages/CreateProject/CreateProject';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adminboard" element={<Adminboard />} />
      <Route path="/createosr" element={<CreateOSR />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ChangePassword />} />
      <Route path="/checkyouremail" element={<CheckYourEmail />} />
      <Route path="/forgotyourpassword" element={<ForgotYourPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/osrdetail" element={<OsrDetail />} />
      <Route path="/createproject" element={<CreateProject />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
