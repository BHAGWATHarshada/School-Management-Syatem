import React, { useState } from 'react';
import './Heading.css';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';

function Heading() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  // Data for the dashboard
  const data = {
    students: { value: 5000, bgImage: 'url(/i1.jpg)' },
    faculty: { value: 80, bgImage: 'url(/i2.jpg)' },
    courses: { value: 45, bgImage: 'url(/i3.jpg)' },
    revenue: { value: "$500,000", bgImage: 'url(/i4.jpg)' },
    calendar: { value: "December 2024", bgImage: 'url(/images/calendar-bg.jpg)' }
  };

  // Placeholder data for charts
  const data1 = [
    { name: 'Jan', Girls: 40, Boys: 60 },
    { name: 'Feb', Girls: 45, Boys: 55 },
    { name: 'Mar', Girls: 50, Boys: 50 },
  ];

  const admissionData = [
    { name: 'Boys', value: 60 },
    { name: 'Girls', value: 40 },
  ];

  const syllabusData = [
    { name: 'Completed', value: 70 },
    { name: 'Pending', value: 30 },
  ];

  const sportsData = [
    { name: 'Participated', value: 80 },
    { name: 'Not Participated', value: 20 },
  ];

  const feeCollectionData = [
    { name: 'Collected', value: 90 },
    { name: 'Due', value: 10 },
  ];

  return (
    <>
      <header className="school-header">
        <img className="logo" src="/logo1.jpg" alt="School Logo" />
        <h1>Evergreen International School</h1>
      </header>

      <div className="heading_marquee">
        <p>
          📢 Welcome to Evergreen International School Management System! |
          Admissions for 2024-2025 are now open. | Parent-Teacher Meeting
          scheduled for December 15th, 2024. | Download the school app for
          real-time updates.
        </p>
      </div>

      <div className="page-container">
        {/* Vertical Navbar */}
        <nav className="vertical_navbar">
          <ul className="vertical_nav_links">
            <li className="vertical_nav_item">Student Section</li>
            <li className="vertical_nav_item">Teacher Section</li>
            <li className="vertical_nav_item">Parent Section</li>
            <li className="vertical_nav_item">Attendance</li>
            <li className="vertical_nav_item">Courses</li>
            <li className="vertical_nav_item v_new">
              <i className="bi bi-gear"></i> Settings
            </li>
            <li className="vertical_nav_item">
              <button className="btn btn-danger logout-btn">Logout</button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="main_content">
          {/* Horizontal Navbar */}
          <nav className="heading_navbar">
            <ul className="heading_nav_links">
              <li className="heading_nav_item">
                <div className="input-group search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </li>
              <li className="heading_nav_item">
                <i className="bi bi-bell"></i>
              </li>
            </ul>
          </nav>

          {/* Carousel */}
          <Carousel>
      <Carousel.Item>
        <img src="/school1.jpg" className="d-block w-100" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/school2.jpg" className="d-block w-100" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/school3.jpg" className="d-block w-100" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="Dashboard">
        <div className="Dashboard-cards">
          {Object.keys(data).map((key) => (
            <div
              className="Dashboard-card"
              style={{ backgroundImage: data[key].bgImage }}
              key={key}
            >
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <p>{data[key].value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="chart_main">
        {/* Bar Chart Section */}
        <div className="bar_chart">
          <h2>Total Attendance 2024</h2>
          <ResponsiveContainer width="70%" height={300}>
            <BarChart
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Girls" fill="#004242" />
              <Bar dataKey="Boys" fill="#FFA500" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Charts Section */}
        <div className="pie_charts">
          <div className="pie_chart">
            <h3>Admissions</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={admissionData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  fill="#8884d8"
                  label={({ name, value }) => `${name}: ${value}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="pie_chart">
            <h3>Syllabus Status</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={syllabusData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  fill="#82ca9d"
                  label={({ name, value }) => `${name}: ${value}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="pie_chart">
            <h3>Sports Activities</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={sportsData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  fill="#ffbb28"
                  label={({ name, value }) => `${name}: ${value}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="pie_chart">
            <h3>Fee Collection</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={feeCollectionData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  fill="#ff8042"
                  label={({ name, value }) => `${name}: ${value}`}
                />
              </PieChart>
            </ResponsiveContainer>
            </div>
                </div>
            </div>
    </>
  );
}

export default Heading;
