import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Addstudents.css';
import { useNavigate } from 'react-router-dom';

const Addstudents = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneNoRef = useRef();
    const tenthRef = useRef();
    const twelfthRef = useRef();
    const tenthpercRef = useRef();
    const twelfthpercRef = useRef();
    const degreeRef = useRef();
    const CGPARef = useRef();
    const YearOfPassingRef = useRef();
    const skillsRef = useRef();
    const streamRef = useRef();
    const navigate = useNavigate();

    const addNewStudent = (e) => {
        e.preventDefault();

        const newStudent = {
            id: idRef.current.value,
            name: nameRef.current.value,
            email: emailRef.current.value,
            phoneNo: phoneNoRef.current.value,
            '10th': tenthRef.current.value,
            '12th': twelfthRef.current.value,
            '10thperc': tenthpercRef.current.value,
            '12thperc': twelfthpercRef.current.value,
            degree: degreeRef.current.value,
            degreeCGPA: parseFloat(CGPARef.current.value),
            yearOfPassing: parseInt(YearOfPassingRef.current.value, 10),
            skills: skillsRef.current.value.split(',').map(skill => skill.trim()),
            stream: streamRef.current.value,
        };

        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent),
        };

        fetch('http://localhost:4000/students', config)
            .then(() => {
                alert('Student added successfully!');
                navigate("/studentsinformation");
            })
            .catch((error) => {
                console.error('Error adding student:', error.message);
                alert('An error occurred while adding a student. Please check the console for details.');
            });
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="ID" ref={idRef} />
                <input type="text" placeholder="Name" ref={nameRef} />
                <input type="email" placeholder="Email" ref={emailRef} />
                <input type="text" placeholder="Phone Number" ref={phoneNoRef} />
                <input type="text" placeholder="10th" ref={tenthRef} />
                <input type="text" placeholder="12th" ref={twelfthRef} />
                <input type="text" placeholder="10th Percentage" ref={tenthpercRef} />
                <input type="text" placeholder="12th Percentage" ref={twelfthpercRef} />
                <input type="text" placeholder="Degree" ref={degreeRef} />
                <input type="text" placeholder="CGPA" ref={CGPARef} />
                <input type="text" placeholder="Year of Passing" ref={YearOfPassingRef} />
                <input type="text" placeholder="Skills (comma-separated)" ref={skillsRef} />
                <input type="text" placeholder="Stream" ref={streamRef} />
                <button type="submit" onClick={addNewStudent}>
                    Add Student
                </button>
            </form>
            <div className="dc">
                <Link to="/students">Home</Link>
            </div>
        </div>
    );
};

export default Addstudents;

