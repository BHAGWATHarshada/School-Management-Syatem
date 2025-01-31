import React, { useState } from "react";
import "./Profile.css"; 
import img from '../Teachersection/Teacher1.jpg';
import img1 from '../Teachersection/Teacher2.jpg';
import img2 from '../Teachersection/Teacher3.jpeg';
import img3 from '../Teachersection/WT.jpg';
import img4 from '../Teachersection/Teacher4.jpg';
import img5 from '../Teachersection/WT1.jpg';
import img6 from '../Teachersection/Teacher5.jpg';
import img7 from '../Teachersection/Teacher6.jpg';
import img8 from '../Teachersection/prin.jpg';
import img9 from '../Teachersection/dean.jpg';
import logo from './stamp1.png';
import img10 from './WT31.jpg';

// Sample data for teachers
const teachers = [
  { name: "Vijay Sharma", subject: "Mathematics", experience: "10 years", image: img },
  { name: "Amol Verma", subject: "Science", experience: "8 years", image: img1 },
  { name: "Karan Ahuja", subject: "Chemistry", experience: "5 years", image: img2 },
  { name: "Swati Nair", subject: "Geography", experience: "6 years", image: img3 },
  { name: "Babbar Singh", subject: "Biology", experience: "3 years", image: img4 },
  { name: "Sania Pathan", subject: "PT", experience: "3 years", image: img5 },
  { name: "Raj Kundra", subject: "Computer", experience: "4 years", image: img6 },
  { name: "Anil Gupta", subject: "English", experience: "6 years", image: img7 },
  { name: "Aria Roy", subject: "Music", experience: "6 years", image: img10 },
];

// Principal and Dean data (unchanged)
const principal = { name: "Dr. Ravi Sharma", qualification: "Ph.D. in Education", experience: "15 years", message: "Education is the most powerful weapon which you can use to change the world.", image: img8 };
const dean = { name: "Dr. Aarti Verma", qualification: "Ph.D. in Educational Leadership", experience: "12 years", message: "Leadership is about creating a vision and inspiring others to achieve it.", image: img9 };

// Teacher card component
const ProfileCard = ({ teacher }) => {
  return (
    <div className="profile-card">
      <img src={teacher.image} alt={teacher.name} className="profile-image" />
      <div className="profile-content">
        <h3>{teacher.name}</h3>
        <p>Subject: {teacher.subject}</p>
        <p>Experience: {teacher.experience}</p>
      </div>
    </div>
  );
};

// Principal and Dean card components
const PrincipalCard = () => (
  <div className="profile-card principal-card">
    <img src={principal.image} alt={principal.name} className="profile-image" />
    <div className="profile-content">
      <h2>Principal</h2>
      <h3 className="name">{principal.name}</h3>
      <p><strong>Qualification:</strong> {principal.qualification}</p>
      <p><strong>Experience:</strong> {principal.experience}</p>
      <blockquote>"{principal.message}"</blockquote>
    </div>
  </div>
);

const DeanCard = () => (
  <div className="profile-card principal-card">
    <img src={dean.image} alt={dean.name} className="profile-image" />
    <div className="profile-content">
      <h2>Dean</h2>
      <h3 className="name">{dean.name}</h3>
      <p><strong>Qualification:</strong> {dean.qualification}</p>
      <p><strong>Experience:</strong> {dean.experience}</p>
      <blockquote>"{dean.message}"</blockquote>
    </div>
  </div>
);

// Main profile component with search bar
const Profile = () => {
  const [filter, setFilter] = useState(""); // State to manage search input

  // Filter teachers based on the search input
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(filter.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="class">
        <div className="ule">
          <img src={logo} alt="School Logo" />
          <h1>Evergreen International School</h1>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search teachers by name or subject..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="profile-layout">
        <div className="left-section">
          <PrincipalCard />
          <DeanCard />
        </div>
        <hr />
        <div className="right-section name">
          {filteredTeachers.map((teacher, index) => (
            <ProfileCard key={index} teacher={teacher} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
