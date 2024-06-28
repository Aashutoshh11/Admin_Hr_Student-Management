import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Addrequirement.css'; 
import { useNavigate } from 'react-router-dom';

const AddRequirement = () => {
    const companyName = useRef();
    const skillsRequired = useRef();
    let navigate=useNavigate();
    const bond = useRef();
    const salary = useRef();
    const noOfPositions=useRef();

    const addNewRequirement = (e) => {
        e.preventDefault();

        const newRequirement = {
            companyName: companyName.current.value,
            skillsRequired: skillsRequired.current.value,
            bond: bond.current.value,
            salary: salary.current.value,
            noOfPositions:noOfPositions.current.value
        };

        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRequirement),
        };  

        fetch('http://localhost:4000/requirements', config)
            .then(() => {
                alert('Requirement added successfully!');
                navigate("/adminhome");
            })
            .catch((error) => {
                console.error('Error adding requirement:', error.message);
                alert('An error occurred while adding requirement. Please check the console for details.');
            });
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="Company Name" ref={companyName}/>
                <input type="text" placeholder="Skills Required" ref={skillsRequired} />
                <input type="text" placeholder="Bond" ref={bond} />
                <input type="text" placeholder="Salary" ref={salary} />
                <input type="text" placeholder="noOfPositions" ref={noOfPositions} />
                <button type="submit" onClick={addNewRequirement}>
                    Add Requirement
                </button>
            </form>
            <div className="dc">
                <Link to="/adminhome">Home</Link>
            </div>
        </div>  
    );
};

export default AddRequirement;
