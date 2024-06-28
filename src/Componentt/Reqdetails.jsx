
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Style/Reqdetails.css';

const Reqdetails = () => {
    const [reqDetails, setReqDetails] = useState({});
    const { id } = useParams();

   
    useEffect(() => {
        console.log('ID:', id);
    
        fetch(`http://localhost:4000/requirements/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('Fetched Data:', data);
                setReqDetails(data);
            })
            .catch(error => {
                console.error('Error fetching requirement details:', error);
            });
    }, [id]);
    

    return (
        <div>
            <nav>
                <Link to="/">HOME</Link>
                {/* <Link to="/addhr"></Link>
                <Link to="/addreq"></Link> */}
                <Link to="/viewrequirement">Back to Requirements List</Link>
            </nav>
 
            <div>
                <h2>Requirement Details</h2>
                {reqDetails && (
    <table border="3px">
        <thead>
            <tr>
                <td>Company Name</td>
                <td>Skills Required</td>
                <td>Bond</td>
                <td>Salary</td>
                <td>No of Positions</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{reqDetails.companyName}</td>
                <td>{reqDetails.skillsRequired}</td>
                <td>{reqDetails.bond}</td>
                <td>{reqDetails.salary}</td>
                <td>{reqDetails.noOfPositions}</td>
            </tr>
        </tbody>
    </table>
)}

            </div>
        </div>
    );
};

export default Reqdetails;
