import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Register from "./Pages/Funders/Register";
import Login from "./Pages/Funders/Login";
import Funders from "./Pages/Funders/FunderHome";
import Peopleregister from "./Pages/People/Peopleregister";
import PeopleLogin from "./Pages/People/PeopleLogin";
import PeopleHome from "./Pages/People/Peoplehome";
import StartupRegister from "./Pages/Startup/StartupRegister";
import StartupHome from "./Pages/Startup/StartupHome";
import StartupLogin from "./Pages/Startup/StartupLogin";
import Map from "./Pages/Maps/Map";
import Home from "./Pages/Homes/Home";
import Contact from "./Pages/Contacts/Contact";
import Chatbot from "./Pages/Startup/Chatbot";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/startuphome" element={<StartupHome/>}/>
            <Route path="/startuplogin" element={<StartupLogin/>}/>
            <Route path="/startupregister" element={<StartupRegister/>}/>
            <Route path="/funders" element={<Funders/>}/>
            <Route path="/startups/:domain" element={<Funders />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/peoplehome" element={<PeopleHome/>}/>
            <Route path="/peoplelogin" element={<PeopleLogin/>}/>
            <Route path="/peopleregister" element={<Peopleregister/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/chat" element={<Chatbot/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App