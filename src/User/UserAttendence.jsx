import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/boostrap.css";
import "../css/main.css";
import "../Login-pages/UserLogin.css";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from "../User/UserAppHeader";

const UserAttendence = () => {
  return (
    <>
    <Usersidebar/>
    <UserAppHeader/>
    
<main className="backgroundColorChange">

<div className="page-wrapper">

  <div className="main-container">

   
    <div className="userSideBar">
    
    </div>
  

    <div className="app-container">

      <div className="userAppHeader">
     
      </div>
      

      <div className="app-hero-header d-flex align-items-start">

       
        <ol className="breadcrumb d-none d-lg-flex align-items-center">
          <li className="breadcrumb-item">
            <i className="bi bi-house text-dark"></i>
            <a href="/UserDashBoard">Home</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">Attendance</li>
        </ol>
      

      </div>

      <div className="app-body">

        <div className="row">
          <div className="col-xxl-12">
            <div className="card mb-4">
              <div className="card-body">
                <div className="custom-tabs-container">
                  <ul className="nav nav-tabs" id="customTab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true">
                        <i className="bi bi-building-check text-dark"></i>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false">
                        <i className="bi bi-building-add text-dark"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="oneA" role="tabpanel">

                    
                      <div className="row">
                        <div className="col-xxl-12">
                   
                          <div className="card">
                            <div className="card-body">
                              <div id="dayGrid"></div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      

                    </div>
                    <div className="tab-pane fade" id="twoA" role="tabpanel">

                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="card mb-4">
                            <div className="card-header">
                              <h5 className="card-title">Mark Attendance</h5>
                            </div>
                            <div className="card-body">
                              <div className="col-12 alert alert-success" id="infoMessage" role="alert">
                                Attendance Already Marked
                              </div>

                             
                              <div className="row" aria-disabled="">
                                <div className="col-12 alert alert-danger d-none" id="infoMessage" role="alert">
                                </div>

                                <div className="col-lg-3 col-sm-4 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="text" className="form-control removeCorner" id="date" disabled placeholder="Enter Date" value="2023-10-25" />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Articles Completed</label>
                                    <textarea className="form-control removeCorner" id="arti-1" placeholder="Article 1" rows="1"></textarea>
                                    <textarea className="form-control removeCorner my-1" id="arti-2" placeholder="Article 2" rows="1"></textarea>
                                    <textarea className="form-control removeCorner" id="arti-3" placeholder="Article 3" rows="1"></textarea>
                                  </div>
                                </div>

                                <div className="col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Tasks have Completed <small>(max characters: 1000)</small></label>
                                    <textarea className="form-control removeCorner" id="task" placeholder="Task" rows="10"></textarea>
                                  </div>
                                </div>
                              </div>
                             
                            </div>
                            <div className="card-footer">
                              <div className="d-flex gap-2 justify-content-center">
                                <button type="button" className="btn btn-dark backgroundColorChange removeCorner" disabled >
                                  Mark Attendance
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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


</main>
</>
  )
}

export default UserAttendence