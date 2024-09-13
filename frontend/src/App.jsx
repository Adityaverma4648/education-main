/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { BrowserRouter, Routes , Route } from "react-router-dom";
 
import './App.css';

// importing General pages
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Register from './Pages/Register';
import Login from "./Pages/Login";
import Assignments from "./Pages/Assignments";
import Settings from "./Pages/Settings";
import Schedule from "./Pages/Schedule";



// importing Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 



function App() {

  const [role, setRole] = useState("parent");

  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path={``} element={<Home />}></Route>
       <Route path={`/profile:${role}/:id`} element={<Profile />}></Route>
       <Route path={`/assignments`} element={<Assignments />}></Route>
       <Route path={`/schedule`} element={<Schedule />}></Route>
       <Route path={`/settings`} element={<Settings />}></Route>

       {/*  signIn and Register */}
       <Route path={`/register`} element={<Register />}></Route>
       <Route path={`/login`} element={<Login />}></Route>

       
     </Routes>
   </BrowserRouter>
  )
}

export default App
