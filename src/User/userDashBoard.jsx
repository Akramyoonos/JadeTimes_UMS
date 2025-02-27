import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/boostrap.css";
import "../css/main.css";
import "../pages/UserLogin.css";
import Usersidebar from "./Usersidebar";


const UserDashboard = () => {
  return (

<main className="backgroundColorChange">


  <div className="page-wrapper">


    <div className="main-container">
   
      <div className="usersideBar">
       
      </div>

      <div className="app-container">

      
        <div className="userAppHeader">
          
        </div>

     
        <div className="app-hero-header d-flex align-items-start">

          <ol className="breadcrumb d-none d-lg-flex align-items-center">
            <li className="breadcrumb-item">
              <i className="bi bi-house text-black"></i>
              <a href="userDashBoard.php">Home</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">Dashboard</li>
          </ol>
  
          <div className="ms-auto d-flex flex-row">
            <div className="d-flex flex-column text-end">
              <p className="m-0 text-secondary">Welcome</p>
              <h3 className="m-0">John Doe</h3>
            </div>
          </div>
         

        </div>
      

     
        <div className="app-body">
          <div className="row">

      
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-12 col-xl-8">
                  <div className="row">
                   
                    <div className="col-12 col-lg-6">
                      <div className="card mb-4">
                        <div className="card-body d-flex align-items-center backGroundRed p-0">
                          <div className="p-4">
                            <i className="fs-1 lh-1 bi bi-check2-circle text-light"></i>
                          </div>
                          <div className="py-4">
                            <h5 className="text-light m-0">Today Attendance</h5>
                            <h1 className="m-0 text-light">SUBMITTED</h1>
                          </div>
                          <span className="badge backgroundColorChange text-light position-absolute top-0 end-0 m-3">2023-10-25</span>
                        </div>
                      </div>
                    </div>

                  
                    <div className="col-12 col-lg-6">
                      <div className="card mb-4">
                        <div className="card-body d-flex align-items-center p-0">
                          <div className="p-4">
                            <i className="bi bi-pie-chart fs-1 lh-1 text-dark"></i>
                          </div>
                          <div className="py-4">
                            <h5 className="text-secondary fw-light m-0">Attendance</h5>
                            <h1 className="m-0"><span id="count1" className="number">100</span> days</h1>
                          </div>
                          <span className="badge backgroundColorChange position-absolute top-0 end-0 m-3">Total</span>
                        </div>
                      </div>
                    </div>

                   
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="card mb-4">
                        <div className="card-body d-flex align-items-center p-0">
                          <div className="p-4">
                            <i className="bi bi-sticky fs-1 lh-1 text-dark"></i>
                          </div>
                          <div className="py-4">
                            <h5 className="text-secondary fw-light m-0">Remaining Leaves</h5>
                            <h1 className="m-0" id="count4">2</h1>
                          </div>
                          <span className="badge backgroundColorChange position-absolute top-0 end-0 m-3">2023-10</span>
                        </div>
                      </div>
                    </div>

                   
                    <div className="col-12 col-md-12">
                      <div className="col-12">
                        <div className="card mb-4 backgroundColorChange">
                          <div className="card-body text-center">
                            <h5 className="mb-3 fw-bold text-light">Developer's Task</h5>
                            <p className="lh-base mb-4 text-light">Complete the project by the end of the month.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-12 col-xl-4 text-sm-center text-lg-center text-xl-end text-md-center text-center mb-2">
                  <img src="assets/img/card_icon.png" className="img-fluid imageSize" style={{height: "400px"}} alt="Profile" />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-12 col-12">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title">Leave Requests</h5>
                </div>
                <div className="card-body">
                  <div className="scroll350">
                    <div className="d-flex align-items-center mb-4">
                      <div className="m-0">
                        <h6 className="fw-bold">John Doe</h6>
                        <p className="mb-2">Sick Leave</p>
                        <p className="small mb-2 text-secondary">2023-10-25</p>
                      </div>
                      <span className="badge bg-info ms-auto">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-12 col-12">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title">Recent Attendance</h5>
                </div>
                <div className="card-body">
                  <div className="scroll350">
                    <div className="d-grid mt-4">
                      <div className="d-flex align-items-center bg-success-subtle">
                        <div className="d-flex flex-column">
                          <p className="ms-1 m-auto"><b>2023-10-25</b></p>
                        </div>
                        <p className="ms-auto text-dark me-1">09:00 AM</p>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="app-footer">
          <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
        </div>

      

      </div>
      
    </div>
    
  </div>

  <div className="modal fade" id="autoModal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Hello User !!</h5>
        </div>
        <div className="modal-body">
          <p id="feedbackMessage">You have been working with us for over three months. We would love to hear your feedback about any issues, complaints, or what you've learned from your experience with Jadeimes.</p>
          <div className="col-12">
            <div className="row">
              <div className="container mt-1">
                <div className="card shadow-sm">
                  <div className="card-header backgroundColorChange removeCorner text-white">
                    <h5 className="mb-0">Rate Your Experience</h5>
                    <span id="feedbackId" className="d-none"></span>
                  </div>
                  <div className="card-body">
                    <form id="feedbackForm">
                   
                      <div className="mb-4">
                        <label htmlFor="rating" className="form-label">Rate Us (1 to 5):</label>
                        <div id="rating" className="d-flex gap-2">
                          <input type="radio" className="btn-check" name="rating" id="rate1" value="1" required/>
                          <label className="btn btn-outline-custom removeCorner" htmlFor="rate1">1</label>
                          <input type="radio" className="btn-check" name="rating" id="rate2" value="2"/>
                          <label className="btn btn-outline-custom removeCorner" htmlFor="rate2">2</label>
                          <input type="radio" className="btn-check" name="rating" id="rate3" value="3"/>
                          <label className="btn btn-outline-custom removeCorner" htmlFor="rate3">3</label>
                          <input type="radio" className="btn-check" name="rating" id="rate4" value="4"/>
                          <label className="btn btn-outline-custom removeCorner" htmlFor="rate4">4</label>
                          <input type="radio" className="btn-check" name="rating" id="rate5" value="5"/>
                          <label className="btn btn-outline-custom removeCorner" htmlFor="rate5">5</label>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="feedback" className="form-label">Your Feedback:</label>
                        <textarea className="form-control" id="feedback" name="feedback" rows="4" placeholder="Share your thoughts..." required></textarea>
                      </div>

                    
                      <div className="text-end">
                        <button type="submit" className="btn btn-dark backgroundColorChange removeCorner">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>

  );
};

export default UserDashboard;

  