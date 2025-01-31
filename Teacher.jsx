import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Teacher.css"; 
import { Link } from "react-router-dom";
import img from '../Teachersection/stamp1.png'

function Teacher() {
  return (
    <div>
      <div className='class'>
        <div className='ule'>  <img src={img}></img>
        <h1>Evergreen Internatioanl School</h1></div>
      
      </div><br></br>

      <div className="sh">
        <div className="ab">
          <ul className="ul">
            <div className="spn">
              <li>
                <div className="icon"><i className="bi bi-person-circle"></i></div>
                <Link to='/Profile' className="ulk">Profile</Link>
              </li>
            </div>
            
            <div className="spn">
              <li>
                <div className="icon"><i className="bi bi-table"></i></div>
                <Link to='/Timetable' className="ulk">TimeTable</Link>
              </li>
            </div>





            <div className="spn">
              <li>
                <div className="icon"><i class="bi bi-telephone-fill"></i></div>
                <Link to='/Contact' className="ulk">Contact</Link>
              </li>
            </div>



          </ul>
        </div>




        
        <div className="br">

          {/* Added Sections */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header ch"> <i className="bi bi-megaphone"></i> Announcements</div>
                <div className="card-body">
                  <ul>
                    <li>Parent-teacher meeting on Monday</li>
                    <li>Sports Day on Friday</li>
                    <li>Submit assignments by this weekend</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-header ch"> <i className="bi bi-bell"></i> Notifications</div>
                <div className="card-body">
                  <ul>
                    <li>Class IX completed assignments</li>
                    <li>New message from Principal</li>
                    <li>Workshop this Saturday</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-header ch"> <i className="bi bi-calendar"></i> Calendar</div>
                <div className="card-body">
                  <ul>
                    <li>Science Fair: Dec 5</li>
                    <li>Annual Day: Dec 15</li>
                    <li>Winter Break: Dec 24 - Jan 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End of Added Sections */}

          <div className="row">
            {/** Card 1 */}
            <div className="col-md-3">
              <div className="card c1">
                <div className="card-body">
                  <h5 className="card-title">Class I</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 2 */}
            <div className="col-md-3">
              <div className="card c2">
                <div className="card-body">
                  <h5 className="card-title">Class II</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 3 */}
            <div className="col-md-3">
              <div className="card c3">
                <div className="card-body">
                  <h5 className="card-title">Class III</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 4 */}
            <div className="col-md-3">
              <div className="card c4">
                <div className="card-body">
                  <h5 className="card-title">Class IV</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 5 */}
            <div className="col-md-3">
              <div className="card c5">
                <div className="card-body">
                  <h5 className="card-title">Class V</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 6 */}
            <div className="col-md-3">
              <div className="card c6">
                <div className="card-body">
                  <h5 className="card-title">Class VI</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 7 */}
            <div className="col-md-3">
              <div className="card c7">
                <div className="card-body">
                  <h5 className="card-title">Class VII</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 8 */}
            <div className="col-md-3">
              <div className="card c8">
                <div className="card-body">
                  <h5 className="card-title">Class VIII</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 9 */}
            <div className="col-md-3">
              <div className="card c9">
                <div className="card-body">
                  <h5 className="card-title">Class IX</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 10 */}
            <div className="col-md-3">
              <div className="card c10">
                <div className="card-body">
                  <h5 className="card-title">Class X</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 11 */}
            <div className="col-md-3">
              <div className="card c11">
                <div className="card-body">
                  <h5 className="card-title">Class XI</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>

            {/** Card 12 */}
            <div className="col-md-3">
              <div className="card c12">
                <div className="card-body">
                  <h5 className="card-title">Class XII</h5>
                  <Link to="/Class1" className="btn btn1">View</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
