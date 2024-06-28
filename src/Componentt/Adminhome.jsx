

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Adminhome.css';

const Adminhome = () => {
    const [req, setReq] = useState([]);
    const [reqIdToDelete, setReqIdToDelete] = useState('');

    useEffect(() => {
        fetch("http://localhost:4000/requirements")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReq(data);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/requirements/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Requirement deleted successfully:', data);
            
            setReq(req.filter(item => item.id !== id));
        })
        .catch(error => {
            console.error('Error deleting requirement:', error);
            
        });
    };

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/addhr">Add HR</Link>
                <Link to="/addreq">Add Requirements</Link>
            </nav>

            <div>
                <h2>Requirements List</h2>
                <table border="3px">
                    <thead>
                        <tr>
                            <td>Sl.no</td>
                            <td>Company Name</td>
                            <td>Skills Required</td>
                            <td>Bond</td>
                            <td>Salary</td>
                            <td>No of Positions</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {req.map((v, i) => (
                            <tr key={i + 1}>
                                <td>{i + 1}</td>
                                <td>{v.companyName}</td>
                                <td>{v.skillsRequired}</td>
                                <td>{v.bond}</td>
                                <td>{v.salary}</td>
                                <td>{v.noOfPositions}</td>
                                <td>
                                    <Link to="/reqdetails">View</Link>
                                    <button onClick={() => handleDelete(v.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Adminhome;
