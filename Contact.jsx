import React from 'react';
import img from '../Teachersection/stamp1.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Contact.css'; // Path to your CSS file

function Contact() {
  return (
    <div>
      <div className='class'>
        <div className='ule'>
          <img src={img} alt="School Stamp" />
          <h1>Evergreen International School</h1>
        </div>
      </div>

      <div className="contact-info">
        <h2>Our Team</h2>

        <div className="contact-info-item">
          <h3>Principal</h3>
          <div className="table-container">
            <div className="teacher-card">
              <p><strong>Name:</strong> Ravi Sharma</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="contact-info-item">
          <h3>Teachers</h3>
          <div className="teacher-list">
            {/* Teacher 1 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Vijay Sharma</p>
              <p><strong>Subject:</strong> Mathematics</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7891</p>
            </div>

            {/* Teacher 2 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Amol Verma</p>
              <p><strong>Subject:</strong> English</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7892</p>
            </div>

            {/* Teacher 3 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Priya Singh</p>
              <p><strong>Subject:</strong> Science</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7893</p>
            </div>

            {/* Teacher 4 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Neha Gupta</p>
              <p><strong>Subject:</strong> Social Studies</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7894</p>
            </div>

            {/* Teacher 5 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Ravi Kumar</p>
              <p><strong>Subject:</strong> History</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7895</p>
            </div>

            {/* Teacher 6 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Kiran Yadav</p>
              <p><strong>Subject:</strong> Geography</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7896</p>
            </div>

            {/* Teacher 7 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Aakash Rao</p>
              <p><strong>Subject:</strong> Chemistry</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7897</p>
            </div>

            {/* Teacher 8 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Sunita Sharma</p>
              <p><strong>Subject:</strong> Biology</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7898</p>
            </div>

            {/* Teacher 9 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Sandeep Singh</p>
              <p><strong>Subject:</strong> Physics</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7899</p>
            </div>

            {/* Teacher 10 */}
            <div className="teacher-card">
              <p><strong>Name:</strong> Rina Patel</p>
              <p><strong>Subject:</strong> Computer Science</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7900</p>
            </div>
          </div>
        </div>

        <div className="contact-info-item">
          <h3>Staff</h3>
          <div className="table-container">
            <div className="teacher-card">
              <p><strong>Name:</strong> Mr. Samuel Carter</p>
              <p><strong>Role:</strong> Administrative Staff</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7893</p>
            </div><br></br>
            <div className="teacher-card">
              <p><strong>Name:</strong> Ms. Emily Davis</p>
              <p><strong>Role:</strong> Librarian</p>
              <p><strong>Phone Number:</strong> <i className="bi bi-telephone" /> +123 456 7894</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
