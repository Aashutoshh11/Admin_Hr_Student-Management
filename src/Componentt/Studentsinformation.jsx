


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Studentsinformation.css';

const Studentsinformation = () => {
    const [students, setStudents] = useState([]);
    const [updateStudentId, setUpdateStudentId] = useState(null);
    const [updatedStudent, setUpdatedStudent] = useState({
        name: '',
        email: '',
        phoneNo: '',
        education: '',
        '10thperc': '',
        '12thperc': '',
        degreeCGPA: '',
        skills: [],
        stream: '',
    });

    useEffect(() => {
        fetch("http://localhost:4000/students")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            });
    }, []);

    const deleteStudent = (id) => {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);

        fetch(`http://localhost:4000/students/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete student');
                }
                console.log('Student deleted successfully from the server.');
            })
            .catch(error => {
                console.error('Error deleting student:', error.message);
                alert('An error occurred while deleting the student. Please check the console for details.');
            });
    };

    const updateStudent = (id) => {
        setUpdateStudentId(id);
        const studentToUpdate = students.find(student => student.id === id);
        setUpdatedStudent({
            name: studentToUpdate.name,
            email: studentToUpdate.email,
            phoneNo: studentToUpdate.phoneNo,
            education: studentToUpdate.education || '',
            '10thperc': studentToUpdate['10thperc'] || '',
            '12thperc': studentToUpdate['12thperc'] || '',
            degreeCGPA: studentToUpdate.degreeCGPA || '',
            skills: studentToUpdate.skills ? [...studentToUpdate.skills] : [],
            stream: studentToUpdate.stream || '',
        });
    };

    const handleUpdate = () => {
       
        const id = updateStudentId;

        fetch(`http://localhost:4000/students/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStudent),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update student');
            }
            console.log('Student updated successfully on the server.');
            setUpdateStudentId(null);
            
        })
        .catch(error => {
            console.error('Error updating student:', error.message);
            alert('An error occurred while updating the student. Please check the console for details.');
        });
    };

    return (
        <div>
            <nav>
                <div className="gj">
                    <Link to="/">Home</Link>
                </div>
                <div className="gg">
                    <Link to="/addstudents">Add Students</Link>
                </div>
            </nav>
            <div>
                <div className="gd">
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
                            <td>Action</td>
                            <td>Action</td>
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
                                    <td>{student['10th']}, {student['12th']}, {student['degree']}</td>
                                    <td>{student['10thperc']}</td>
                                    <td>{student['12thperc']}</td>
                                    <td>{student.degreeCGPA}</td>
                                    <td>{student.skills ? student.skills.join(', ') : 'N/A'}</td>
                                    <td>{student.stream}</td>
                                    <td>
                                        <button onClick={() => deleteStudent(student.id)}>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => updateStudent(student.id)}>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="13">No students available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {updateStudentId && (
                    <div className="update-form">
                        <h3>Update Student Information</h3>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={updatedStudent.name}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, name: e.target.value })}
                        />
                        <label>Email:</label>
                        <input
                            type="text"
                            value={updatedStudent.email}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, email: e.target.value })}
                        />
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={updatedStudent.phoneNo}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, phoneNo: e.target.value })}
                        />
                        <label>Education:</label>
                        <input
                            type="text"
                            value={updatedStudent.education}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, education: e.target.value })}
                        />
                        <label>10th Perc:</label>
                        <input
                            type="text"
                            value={updatedStudent['10thperc']}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, '10thperc': e.target.value })}
                        />
                        <label>12th Perc:</label>
                        <input
                            type="text"
                            value={updatedStudent['12thperc']}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, '12thperc': e.target.value })}
                        />
                        <label>Degree CGPA:</label>
                        <input
                            type="text"
                            value={updatedStudent.degreeCGPA}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, degreeCGPA: e.target.value })}
                        />
                        <label>Skills:</label>
                        <input
                            type="text"
                            value={updatedStudent.skills ? updatedStudent.skills.join(', ') : ''}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, skills: e.target.value.split(', ') })}
                        />
                        <label>Stream:</label>
                        <input
                            type="text"
                            value={updatedStudent.stream}
                            onChange={(e) => setUpdatedStudent({ ...updatedStudent, stream: e.target.value })}
                        />
                        <button onClick={handleUpdate}>Save Changes</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Studentsinformation;
