import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ManageStaff = () => {
  return (
    <main class="backgroundColorChange" onload="loadStaffDateToFront(0)">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="adminPanel.php">Home</a>
                        </li>
                        <li class="breadcrumb-item">Manage Staff</li>
                    </ol>
                </div>

                <div class="app-body" id="cbody">
                    <div class="row mb-5">
                        <div class="col-12">
                            <p class="d-inline-flex gap-1">
                                <button class="btn btn-dark backgroundColorChange removeCorner" type="button" 
                                        data-bs-toggle="collapse" data-bs-target="#collapseExample" 
                                        aria-expanded="false" aria-controls="collapseExample">
                                    <i class="bi bi-person-plus"></i> Add New Staff Member
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="card mb-4">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-sm-6 col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Select User</label>
                                                                <select class="form-select removeCorner" id="adduser">
                                                                    <option value="0">Select user</option>
                                                                   
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-sm-6 col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Registered Date</label>
                                                                <input type="date" id="dor" 
                                                                       class="form-control removeCorner" 
                                                                       placeholder="Registration Date"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 mt-4">
                                                    <button type="button" onclick="registerNewStaff()" 
                                                            class="btn btn-dark removeCorner backgroundColorChange w-50">
                                                        Register New Staff Member
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div class="row">
                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <input type="text" id="searchname" 
                                       class="form-control removeCorner smallText" 
                                       placeholder="Search by name" 
                                       oninput="loadStaffDateToFront(1)"/>
                            </div>
                        </div>
                       
                    </div>

                   
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-hover m-0">
                                            <thead>
                                                <tr>
                                                    <th>NO</th>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>Staff Reg Date</th>
                                                    <th>Department</th>
                                                    <th>Position</th>
                                                    <th>User Type</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div class="row">
                        <div class="col-xl-5 col-lg-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title">Pending Payments</h5>
                                </div>
                                <div class="card-body">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Month</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodypp"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-7 col-lg-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title">Payment History</h5>
                                </div>
                                <div class="card-body">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>JID</th>
                                                <th>User</th>
                                                <th>For</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodyphistory"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>

</main>
  )
}

export default ManageStaff