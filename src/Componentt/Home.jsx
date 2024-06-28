import React from 'react';
import '../Style/Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="container">
        <div className="heading">
        <h2>B2TALK</h2>
    
      </div>

      <div className="section admin">
        <Link to='/adminlogin'><h2>ADMIN</h2></Link>
    
      </div>
      <div className="section hr">
      <Link to='/hrlogin'><h2>HR</h2></Link>
        
      </div>
      <div className="section Student">
      <Link to='/studentslogin'><h2>STUDENT</h2></Link>
       
      </div>
    </div>
  );
};

export default Home;
