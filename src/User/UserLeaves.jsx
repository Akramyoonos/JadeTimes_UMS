import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/boostrap.css";
import "../css/main.css";
import "../pages/UserLogin.css";
import Usersidebar from "./Usersidebar";


const UserLeaves = () => {
  return (
    
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
            <a href="userDashBoard.php">Home</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">Leaves</li>
        </ol>
       

      </div>
     

     
      <div className="app-body" id="mainRow">

        <div className="row">
          <div className="col-xxl-12">
            <div className="card mb-4">
              <div className="card-body">
                <div className="custom-tabs-container">
                  <ul className="nav nav-tabs" id="customTab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true">
                        <i className="bi bi-list-nested text-dark"></i>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false">
                        <i className="bi bi-send-plus-fill text-dark"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="oneA" role="tabpanel">

                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="card mb-4">
                            <div className="card-body">
                              <div className="card-header">
                                <h5 className="card-title">Leaves</h5>
                              </div>
                              <div className="table-responsive mt-5">
                                <table className="table table-bordered m-0">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Status</th>
                                      <th>Date</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>
                                        <span className="badge backgroundColorChange text-light">Pending</span>
                                      </td>
                                      <td>2023-10-25</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>
                                        <span className="badge bg-success text-light">Approved</span>
                                      </td>
                                      <td>2023-10-20</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>
                                        <span className="badge bg-danger text-light">Rejected</span>
                                      </td>
                                      <td>2023-10-15</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
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
                              <h5 className="card-title">Request For a Leave</h5>
                            </div>
                            <div className="card-body">
                              
                              <div className="row" aria-disabled="">
                                <div className="col-12 alert alert-danger d-none" id="infoMessage" role="alert">
                                </div>

                                <div className="col-lg-3 col-sm-4 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="date" className="form-control removeCorner" id="date" placeholder="Enter Date" defaultValue="" />
                                  </div>
                                </div>

                                <div className="col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Reason <small>(max characters: 1000)</small></label>
                                    <textarea className="form-control removeCorner" id="reason" placeholder="Mention your reason" rows="10"></textarea>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                            <div className="card-footer">
                              <div className="d-flex gap-2 justify-content-center">
                                <button type="button" className="btn btn-dark backgroundColorChange removeCorner" >Request</button>
                              </div>
                              <div className="col-12 col-lg-6 offset-lg-3 mt-3">
                                <p className="text-danger fw-bold">Please be informed of the specific procedure when you apply for leaves:</p>
                                <p>*Leave Policy:*</p>
                                <p className="mt-1">
                                  - Submit your leave request at least two days before.<br/>
                                  - Each employee is entitled to a total of 3 leaves per month.<br/>
                                  - You can request a normal leave through the system.<br/>
                                  - Inform your divisional head.<br/>
                                </p>
                                <p className="mt-2 bg-danger-subtle m-auto">
                                  - You can take up to 2 emergency leaves without prior notice, which will be deducted from your total leaves.📌<br/>
                                  Send an email to <b><a href="mailto:info@jadetimes.com">info@jadetimes.com</a></b><br/>
                                  CC the email to <b>hr@ums.jadetimes.com</b>
                                </p>
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

  )
}

export default UserLeaves