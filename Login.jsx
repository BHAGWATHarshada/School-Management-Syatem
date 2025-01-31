import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import image from "./stamp1.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const initialValues = { mail: "", password: "", userType: "" };
  const [formvalues, setformvalues] = useState(initialValues);
  const [formerrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalues));
    setissubmit(true);

    if (Object.keys(validate(formvalues)).length === 0) {
      // Proceed with login if no errors
      navigate("/");
    }
  };

  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log("Form submitted successfully:", formvalues);
    }
  }, [formerrors, issubmit, formvalues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!values.mail) {
      errors.mail = "Email is required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }

    if (!values.userType) {
      errors.userType = "User type is required";
    }

    return errors;
  };

  return (
    <div>
      <div className="flex">
        <div className="contain">
          {Object.keys(formerrors).length === 0 && issubmit && (
            <div className="alert alert-success text-center">LOGIN SUCCESS</div>
          )}
          <div className="row justify-content-center contain2">
            <div className="col-md-6 col-sm-12 mt-5 p-4 border rounded shadow-sm">
              <h2 className="text-center">Login</h2>
              <hr />
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label htmlFor="mail" className="form-label text-start">
                    Email Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      id="mail"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="mail"
                      value={formvalues.mail}
                      onChange={handlechange}
                      required
                    />
                  </div>
                  <p className="text-danger">{formerrors.mail}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-start">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter Password"
                      name="password"
                      value={formvalues.password}
                      onChange={handlechange}
                      required
                    />
                  </div>
                  <p className="text-danger">{formerrors.password}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label">
                    User Type
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <select
                      id="userType"
                      className="form-select"
                      name="userType"
                      value={formvalues.userType}
                      onChange={handlechange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Teacher">Teacher</option>
                      <option value="Parent">Parent</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>
                  <p className="text-danger">{formerrors.userType}</p>
                </div>
                <button
                  type="submit"
                  className="btn w-100 bn"
                  onClick={() => 
                   
                    navigate("/Header.js")
                  }
                >
                  Login
                </button>
              </form>
              <br />
              <button
                className="btn w-100 bn"
                onClick={() => navigate("/SignUP")}
              >
                New User?
              </button>
            </div>
          </div>
        </div>
        <div className="logo1">
          <img src={image} alt="School Logo" className="logo-image" />
          <div className="school-name">Evergreen International School</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
