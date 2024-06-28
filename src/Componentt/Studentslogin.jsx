

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Studentslogin.css';

const Studentslogin = () => {
    const idRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleStudentLogin = (e) => {
        e.preventDefault();


        fetch("http://localhost:4000/students")
            .then(res => res.json())
            .then(students => {
                const studentObj = students.find(student => student.id === idRef.current.value && student.password === passwordRef.current.value);

                if (!studentObj) {
                    alert("Invalid credentials. Please try again.");
                } else {
                    navigate("/students");
                }
            })
            .catch(error => console.error("Error during student login:", error));
    };

    return (
        <div className="students-login-container">
            <form className="students-login-form">
                <h1> Login</h1>
                <input type="text" placeholder="Student ID" ref={idRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <input type="submit" value="Login" onClick={handleStudentLogin} />
            </form>
        </div>
    );
};

export default Studentslogin;
