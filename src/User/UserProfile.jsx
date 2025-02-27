import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/boostrap.css";
import "../css/main.css";
import "../pages/UserLogin.css";
import Usersidebar from "./Usersidebar";

const UserProfile = () => {
  return (
    
    
<main className="backgroundColorChange">
  <div className="page-wrapper">
    <div className="main-container">
      <div className="userSideBar"></div>
      <div className="app-container">
        <div className="userAppHeader"></div>
        <div className="app-hero-header d-flex align-items-start">
          <ol className="breadcrumb d-none d-lg-flex align-items-center">
            <li className="breadcrumb-item">
              <i className="bi bi-house text-dark"></i>
              <a href="userDashBoard.php">Home</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">Profile</li>
          </ol>
          <div className="ms-auto d-flex flex-row">
            <div className="d-flex flex-column me-5 text-end">
              <h3 className="m-0">JID12345</h3>
            </div>
          </div>
        </div>
        <div className="app-body smoothScroll" id="cbody">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <img src="assets/img/iconImg.jpg" className="img-5xx rounded-circle" alt="Profile Image" />
                    </div>
                    <div className="col">
                      <h4 className="m-0">John Doe</h4>
                      <h6 className="text-primary">Software Development</h6>
                    </div>
                    <div className="col-12 bg-light-subtle col-md-auto text-center">
                      <h5 className="m-0 text-primary">Software Engineer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="custom-tabs-container">
                    <ul className="nav nav-tabs justify-content-end" id="customTab5" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="tab-oneAAAA" data-bs-toggle="tab" href="#oneAAAA" role="tab" aria-controls="oneAAAA" aria-selected="true">
                          <span className="badge bg-succes backgroundColorChange">Profile</span>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-twoAAAA" data-bs-toggle="tab" href="#twoAAAA" role="tab" aria-controls="twoAAAA" aria-selected="false">
                          <span className="badge bg-danger">Password</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="customTabContent">
                      <div className="tab-pane fade show active" id="oneAAAA" role="tabpanel">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="card mb-4">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-12 mb-3">
                                    <div className="alert alert-danger d-none" id="infoMessage" role="alert"></div>
                                  </div>
                                  <div className="col-12 text-center">
                                    <label className="form-label mt-2 fs-6">Profile Image</label>
                                  </div>
                                  <div className="col-sm-12 col-12 text-center">
                                    <div className="card mb-4">
                                      <div className="card-body">
                                        <div className="row">
                                          <div className="col-sm-12 text-center">
                                            <img className="imageSize img-fluid rounded-2" src="assets/img/defaultProfileImage.png"  id="view1" alt="" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Surname</label>
                                      <input type="text" disabled id="sname" className="form-control removeCorner" defaultValue="Doe" placeholder="Enter Surname" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">First Name</label>
                                      <input type="text" disabled id="fname" className="form-control removeCorner" placeholder="Enter First Name"  defaultValue="John" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Middle Name</label>
                                      <input type="text" disabled id="mname" className="form-control removeCorner" placeholder="Enter Middle Name"  defaultValue="A." />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Last Name</label>
                                      <input type="text" disabled id="lname" className="form-control removeCorner" placeholder="Enter Last Name"  defaultValue="Smith" />
                                    </div>
                                  </div>
                                  <div className="col-12"><hr/></div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Email</label>
                                      <input type="email" id="email" className="form-control removeCorner" disabled placeholder="Enter email address"  defaultValue="john.doe@example.com" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Phone</label>
                                      <input type="text" disabled id="mobile" className="form-control removeCorner" placeholder="Enter phone number"  defaultValue="123-456-7890" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">NIC No/Passport No/Driving License No</label>
                                      <input type="text" disabled id="nic" className="form-control removeCorner" placeholder="national ID"  defaultValue="123456789" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Date Of Birth</label>
                                      <input type="date" disabled id="dob" className="form-control removeCorner" placeholder="date of birth"  defaultValue="1990-01-01" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Gender</label>
                                      <select className="form-select removeCorner" id="gender" disabled>
                                        <option  defaultValue="0">Select</option>
                                        <option  defaultValue="1" selected>Male</option>
                                        <option  defaultValue="2">Female</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-12"><hr/></div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Department</label>
                                      <input type="text" className="form-control removeCorner" disabled placeholder="department"  defaultValue="Software Development" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Position</label>
                                      <input type="text" className="form-control removeCorner" disabled placeholder="position"  defaultValue="Software Engineer" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Duration</label>
                                      <input type="text" disabled id="duration" className="form-control removeCorner"  defaultValue="2 years" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">LinkedIn</label>
                                      <input type="text" disabled id="linkdin" className="form-control removeCorner"  defaultValue="linkedin.com/in/johndoe" />
                                    </div>
                                  </div>
                                  <div className="col-12"><hr/></div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">No</label>
                                      <input type="text" disabled id="no" className="form-control removeCorner"  defaultValue="123" placeholder="Enter no" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Line 1</label>
                                      <input type="text" disabled id="line1" className="form-control removeCorner"  defaultValue="Main Street" placeholder="Enter Line 1" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Line 2</label>
                                      <input type="text" disabled id="line2" className="form-control removeCorner"  defaultValue="Apt 4B" placeholder="Enter Line 2" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">City</label>
                                      <input type="text" disabled id="city" className="form-control removeCorner"  defaultValue="" placeholder="Enter city" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Select Country</label>
                                      <select className="form-select removeCorner" disabled id="country">
                                        <option  defaultValue="0">Select</option>
                                        <option  defaultValue="1" selected>United States</option>
                                        <option  defaultValue="2">Canada</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="twoAAAA" role="tabpanel">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="card mb-4">
                              <div className="card-header">
                                <h5 className="card-title">Change the Password</h5>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-12 mb-3">
                                    <div className="alert alert-danger d-none" id="infoMessagePassword" role="alert"></div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Enter the OLD password</label>
                                      <input type="text" className="form-control removeCorner" id="oldPass" placeholder="old" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Enter the NEW password</label>
                                      <input type="text" className="form-control removeCorner" id="newPass" placeholder="new" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-4 col-12">
                                    <div className="mb-3">
                                      <label className="form-label">Repeat the NEW password</label>
                                      <input type="text" className="form-control removeCorner" id="repertPass" placeholder="repeat" />
                                    </div>
                                  </div>
                                  <div className="col-12 mb-3">
                                    <div className="d-flex gap-2 justify-content-start">
                                      <button type="button" className="btn btn-danger removeCorner" >Update The Password</button>
                                      <a className="btn btn-dark backgroundColorChange removeCorner" href="forgotPassword.php">Forgot Password ?</a>
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

export default UserProfile