



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/students")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            });
    }, []);

    // const deleteStudent = (id) => {
        
    //     const updatedStudents = students.filter(student => student.id !== id);
    //     setStudents(updatedStudents);

    
    //     fetch(`http://localhost:4000/students/${id}`, { method: 'DELETE' })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Failed to delete student');
    //             }
    //             console.log('Student deleted successfully from the server.');
    //         })
    //         .catch(error => {
    //             console.error('Error deleting student:', error.message);
    //             alert('An error occurred while deleting the student. Please check the console for details.');
    //         });
    // };

    return (
        <div>
            <nav>
                <div className="gj">
                    <Link to="/">Home</Link>
                </div>
                <div className="gg">
                    <Link to="/viewrequirement">View requirements</Link>
                </div>
                <div className="gg">
                    <Link to="/applyjob">Apply Job</Link>
                </div>
            </nav>
            <div>
                <div class="gd">
                <h2>Students Information</h2>
                </div>
                <table border="5px">
                    <thead>
                        <tr>
                            <td>Sl.no</td>
                            <td>Name</td>
                            <td>ID</td>
                            <td>Email</td>
                            <td>Phone Number</td>
                            <td>Education</td>
                            <td>10th Perc</td>
                            <td>12th Perc</td>
                            <td>Degree CGPA</td>
                            <td>Skills</td>
                            <td>Stream</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(students) && students.length > 0 ? (
                            students.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.id}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phoneNo}</td>
                                    <td>{student[`10th`]}, {student[`12th`]}, {student[`degree`]}</td>
                                    <td>{student['10thperc']}</td>
                                    <td>{student['12thperc']}</td>
                                    <td>{student.degreeCGPA}</td>
                                    <td>{student.skills.join(', ')}</td>
                                    <td>{student.stream}</td>
                                    {/* <td>
                                        <button onClick={() => deleteStudent(student.id)}>
                                            Delete
                                        </button>
                                    </td> */}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="12">No students available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;

