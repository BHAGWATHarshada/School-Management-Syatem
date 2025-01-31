import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    usertype: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signupData", JSON.stringify(userData));
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h2 className="text-center">Sign Up</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                value={userData.name}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="Enter Your Email"
                value={userData.email}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={userData.password}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                name="cpassword"
                placeholder="Confirm Password"
                value={userData.cpassword}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <select
                id="userType"
                className="form-select"
                name="usertype"
                value={userData.usertype}
                onChange={handleInputs}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn bn1 w-100 mt-3">
            Sign Up
          </button>
        </form>
        <button
          type="button"
          className="btn bn1 w-100 mt-2"
          onClick={() => navigate("/Login")}
        >
          Already a User? Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
