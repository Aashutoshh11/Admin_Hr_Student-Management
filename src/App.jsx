
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Componentt/Home';
 import Adminlogin from './Componentt/Adminlogin';
 import Adminhome from './Componentt/Adminhome';
 import Addhr from './Componentt/Addhr';
 import Hrhome from './Componentt/Hrhome';
 import HRlogin from './Componentt/HRlogin';
import Addrequirement from './Componentt/Addrequirement';
import Students from './Componentt/Students';
import Addstudents from './Componentt/Addstudents';
import Studentslogin from './Componentt/Studentslogin';
import Studentsinformation from './Componentt/Studentsinformation'
import Viewrequirement from './Componentt/Viewrequirement';
import Reqdetails from './Componentt/Reqdetails';


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<Adminlogin/>} />
        <Route path="/adminhome" element={<Adminhome/>} />
        <Route path='/addhr' element={<Addhr/>} />
        <Route path='/hrhome' element={<Hrhome/>} />
        <Route path='/hrlogin' element={<HRlogin/>} />
        <Route path='/addreq' element={<Addrequirement/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/addstudents' element={<Addstudents/>} />
        <Route path='/studentslogin' element={<Studentslogin/>} />
        <Route path='/studentsinformation' element={<Studentsinformation/>} />
        <Route path='/viewrequirement' element={<Viewrequirement/>}/>
        <Route path='/reqdetails' element={<Reqdetails/>}/>
   
        
      </Routes>

    </BrowserRouter>
  );
};

export default App;
