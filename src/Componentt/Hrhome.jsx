import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Hrhome.css';

const Hrhome = () => {
    const [hrList, setHrList] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:4000/hr")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHrList(data);
            })
            .catch(error => console.error("Error fetching HR data:", error));
    }, []);

    const handleDelete = (id) => {
        
        fetch(`http://localhost:4000/hr/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            
            setHrList(prevList => prevList.filter(hr => hr.id !== id));
            alert('HR deleted successfully!');
        })
        .catch(error => console.error("Error deleting HR:", error));
    };

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/addhr">Add HR</Link>
                <Link to="/studentsinformation">Students Information</Link>
                
            </nav>
            <div>
                <h2>HR List</h2>
                <table border="3px">
                    <thead>
                        <tr>
                            <td>Sl.no</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td> 
                        </tr>
                    </thead>
                    <tbody>
                        {hrList.map((hr, index) => (
                            <tr key={hr.id}>
                                <td>{index + 1}</td>
                                <td>{hr.name}</td>
                                <td>{hr.email}</td>
                                <td>{hr.phone}</td>
                                <td>
                                    <button onClick={() => handleDelete(hr.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Hrhome;
