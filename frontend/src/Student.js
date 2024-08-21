import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom'; // Import Link for navigation
function Student() {
    const [student, setStudent] = useState([]); // State to store the list of students
    // useEffect hook to fetch student data from the server when the component mounts
    useEffect(() => {
        axios.get("http://localhost:5001/") // Send GET request to the server to fetch all students
            .then(res => setStudent(res.data)) // Update state with the fetched data
            .catch(err => console.log(err)); // Log any errors
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
    // Function to handle the deletion of a student
    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:5001/student/' + id) // Send DELETE request to the server with the student ID
            window.location.reload() // Reload the page to reflect the changes
        }
        catch (error) {
            console.log(error) // Log any errors that occur during the deletion
        }
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to={"/create"} className='btn btn-success'>Add</Link> {/* Link to navigate to the create student page */}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>name</th> {/* Table header for student name */}
                            <th>email</th> {/* Table header for student email */}
                            <th>marks</th> {/* Table header for student marks */}
                            <th>grade</th> {/* Table header for student grade */}
                            <th>city</th> {/* Table header for student city */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i) => ( // Map through the student array to display each student's details
                                <tr key={i}>
                                    <td>{data.name}</td> {/* Display student name */}
                                    <td>{data.email}</td> {/* Display student email */}
                                    <td>{data.marks}</td> {/* Display student marks */}
                                    <td>{data.grade}</td> {/* Display student grade */}
                                    <td>{data.city}</td> {/* Display student city */}
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-warning'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={(e) => handledelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Student;
