import React, { useState, useEffect } from 'react';
import './Class1.css';
import img from './stamp1.png'

function Class1() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentEmail, setNewStudentEmail] = useState("");
  const [newStudentPhone, setNewStudentPhone] = useState("");
  const [newStudentClass, setNewStudentClass] = useState("");
  const [newStudentAddress, setNewStudentAddress] = useState("");
  const [attendance, setAttendance] = useState({});

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    const storedAttendance = JSON.parse(localStorage.getItem('attendance')) || {};
    console.log("Loaded students from localStorage:", storedStudents); // Debugging
    console.log("Loaded attendance from localStorage:", storedAttendance); // Debugging
    setStudents(storedStudents);
    setAttendance(storedAttendance);
  }, []);

  // Save data to localStorage whenever students or attendance change
  useEffect(() => {
    console.log("Saving students to localStorage:", students); // Debugging
    console.log("Saving attendance to localStorage:", attendance); // Debugging
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('attendance', JSON.stringify(attendance));
  }, [students, attendance]);

  // Handle adding a new student
  const addStudent = () => {
    if (newStudentName && newStudentEmail && newStudentPhone && newStudentClass) {
      const newStudent = {
        name: newStudentName,
        email: newStudentEmail,
        phone: newStudentPhone,
        Address: newStudentAddress,
        studentClass: newStudentClass
      };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      setAttendance((prev) => ({
        ...prev,
        [newStudent.name]: "Absent",  // Use the name as the key for attendance
      }));
      // Clear input fields
      setNewStudentName("");
      setNewStudentEmail("");
      setNewStudentPhone("");
      setNewStudentClass("");
      setNewStudentAddress("");
    }
  };

  const deleteStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1); // Remove the student by index
    setStudents(newStudents);

    // Remove attendance data for that student
    const newAttendance = { ...attendance };
    delete newAttendance[students[index].name]; // Use name as key
    setAttendance(newAttendance);
  };

  // Handle updating student information
  const updateStudent = (index, newName) => {
    const updatedStudents = [...students];
    updatedStudents[index] = { ...updatedStudents[index], name: newName };
    setStudents(updatedStudents);
  };

  // Handle attendance change
  const handleAttendanceChange = (name, status) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [name]: status,
    }));
  };

  // Submit attendance
  const submitAttendance = () => {
    alert("Attendance submitted!");
    console.log(attendance); // You can replace this with an API call to save attendance data
  };

  return (
    <div>
      <div className='class'>
        <div className='ule'>  <img src={img}></img>
        <h1>Evergreen Internatioanl School</h1></div>
      
      </div>
      <div className='class1'>
        {/* Student Information Section */}
        <div>
          <h2>Add Student</h2>
          <input
            type="text"
            placeholder="Student Name"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Student Email"
            value={newStudentEmail}
            onChange={(e) => setNewStudentEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student Phone"
            value={newStudentPhone}
            onChange={(e) => setNewStudentPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student Address"
            value={newStudentAddress}
            onChange={(e) => setNewStudentAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student Class"
            value={newStudentClass}
            onChange={(e) => setNewStudentClass(e.target.value)}
          />
          <button onClick={addStudent}>Add Student</button>
        </div>

        {/* Student Table Section */}
        <div>
          <h2>Student Information Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Class</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.studentClass}</td>
                  <td>{student.Address}</td>
                  <td>
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                    <button
                      onClick={() => {
                        const newName = prompt("Enter new name:", student.name);
                        if (newName) {
                          updateStudent(index, newName);
                        }
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Attendance Section */}
        <div>
          <h2>Attendance</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                {student.name} (ID: {index + 1})
                <select
                  value={attendance[student.name] || "Absent"}
                  onChange={(e) => handleAttendanceChange(student.name, e.target.value)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
                </select>
              </li>
            ))}
          </ul>
          <button onClick={submitAttendance}>Submit Attendance</button>
        </div>
      </div>
    </div>
  );
}

export default Class1;
