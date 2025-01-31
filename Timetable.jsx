import React,{useState} from "react";
import './Timetable.css'
import img from './stamp1.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const Timetable = () => {
  const [selectedClass, setSelectedClass] = useState(1);
  const timetableData = {
    1: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Science", teacher: "Dr. Gupta" },
      { subject: "Art", teacher: "Ms. Rani" },
      { subject: "Music", teacher: "Mr. Das" },
    ],
    2: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "EVS", teacher: "Dr. Patel" },
      { subject: "Drawing", teacher: "Ms. Rani" },
      { subject: "Craft", teacher: "Ms. Singh" },
    ],
    3: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "EVS", teacher: "Dr. Patel" },
      { subject: "Computer", teacher: "Mr. Raj" },
      { subject: "PE", teacher: "Mr. Kumar" },
    ],
    4: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Science", teacher: "Dr. Gupta" },
      { subject: "Social Studies", teacher: "Ms. Meena" },
      { subject: "Computer", teacher: "Mr. Raj" },
    ],
    5: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Science", teacher: "Dr. Gupta" },
      { subject: "Social Studies", teacher: "Ms. Meena" },
      { subject: "Art", teacher: "Ms. Rani" },
    ],
    6: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Physics", teacher: "Dr. Kapoor" },
      { subject: "Chemistry", teacher: "Dr. Ahuja" },
      { subject: "Biology", teacher: "Dr. Singh" },
    ],
    7: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Physics", teacher: "Dr. Kapoor" },
      { subject: "Chemistry", teacher: "Dr. Ahuja" },
      { subject: "History", teacher: "Mr. Bose" },
    ],
    8: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Physics", teacher: "Dr. Kapoor" },
      { subject: "Chemistry", teacher: "Dr. Ahuja" },
      { subject: "Geography", teacher: "Ms. Nair" },
    ],
    9: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "Biology", teacher: "Dr. Singh" },
      { subject: "Physics", teacher: "Dr. Kapoor" },
      { subject: "Chemistry", teacher: "Dr. Ahuja" },
    ],
    10: [
      { subject: "Math", teacher: "Mr. Sharma" },
      { subject: "English", teacher: "Ms. Verma" },
      { subject: "History", teacher: "Mr. Bose" },
      { subject: "Civics", teacher: "Ms. Roy" },
      { subject: "Computer", teacher: "Mr. Raj" },
    ],
    11: [
      { subject: "Math", teacher: "Dr. Mishra" },
      { subject: "Physics", teacher: "Dr. Kapoor" },
      { subject: "Chemistry", teacher: "Dr. Ahuja" },
      { subject: "Biology", teacher: "Dr. Singh" },
      { subject: "English", teacher: "Ms. Roy" },
    ],
    12: [
      { subject: "Math", teacher: "Dr. Mishra" },
      { subject: "Physics", teacher: "Dr. Kapoor" },
      { subject: "Chemistry", teacher: "Dr. Ahuja" },
      { subject: "English", teacher: "Ms. Roy" },
      { subject: "Optional", teacher: "Mr. Kumar" },
    ],
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getPeriodTime = (index) => {
    const startHour = 9;
    const startMinute = 0;
    const periodDuration = 30; // 30 minutes per period

    const periodStart = new Date(0, 0, 0, startHour, startMinute + index * periodDuration);
    const periodEnd = new Date(0, 0, 0, startHour, startMinute + (index + 1) * periodDuration);

    const formatTime = (date) =>
      `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

    return `${formatTime(periodStart)} - ${formatTime(periodEnd)}`;
  };

  return (
    <div className="timetable-container">
      <header className="header text-center">
        <div className="logo">
         <div> <img src={img} alt="Logo" className="img-fluid" style={{ width: '80px',height:'80px' }} /></div>
          <h1>Evergreen International School</h1>
        </div>
        </header><hr></hr>
        <label htmlFor="classSelect" className="label">Select Class: </label>
        <select
          id="classSelect"
          className=" class-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(Number(e.target.value))}
        >
          {Object.keys(timetableData).map((classNum) => (
            <option key={classNum} value={classNum}>
              Class {classNum}
            </option>
          ))}
        </select>
      
       
     

      <div className="table-container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Period</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetableData[selectedClass].map((item, index) => (
              <tr key={index}>
                <td className="period-time">
                  Period {index + 1} <br /> ({getPeriodTime(index)})
                </td>
                {days.map((day) => (
                  <td key={day}>
                    <strong>Subject:</strong> {item.subject}
                    <br />
                    <strong>Teacher:</strong> {item.teacher}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;