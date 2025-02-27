import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ManageUser = () => {
  return (
    <main class="backgroundColorChange" onload="loadUserDateToFront(0)">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="adminPanel.php">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Manage User</li>
                    </ol>
                </div>

                <div class="app-body" id="cbody">
                    <div class="row mb-5">
                        <div class="col-12">
                            <p class="d-inline-flex gap-1">
                                <button class="btn btn-dark backgroundColorChange removeCorner" type="button" 
                                        data-bs-toggle="collapse" data-bs-target="#collapseExample" 
                                        aria-expanded="false" aria-controls="collapseExample">
                                    <i class="bi bi-person-plus"></i> Add New User
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="card mb-4">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 mb-3">
                                                            <div class="alert alert-danger d-none" 
                                                                 id="infoMessageProfileUpdate" role="alert">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-sm-4 col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Surname</label>
                                                                <input type="text" id="sname" 
                                                                       class="form-control removeCorner" 
                                                                       placeholder="Enter Surname"/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-sm-4 col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">First Name</label>
                                                                <input type="text" id="fname" 
                                                                       class="form-control removeCorner" 
                                                                       placeholder="Enter First Name"/>
                                                            </div>
                                                        </div>

                                                     
                                                        
                                                        <div class="col-12 mt-4">
                                                            <div class="d-flex gap-2 justify-content-center">
                                                                <button type="button" 
                                                                        onclick="registerNewUser()" 
                                                                        class="btn btn-dark removeCorner backgroundColorChange w-50">
                                                                    Register New User
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

                    <div class="row">
                        <div class="col-lg-3 col-sm-4 col-12">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label fs-6">Search By :</label>
                                    </div>
                                </div>
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
                                                    <th scope="col">NO</th>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Mobile</th>
                                                    <th scope="col">Department</th>
                                                    <th scope="col">Position</th>
                                                    <th scope="col">Registered date</th>
                                                    <th scope="col">User Type</th>
                                                    <th scope="col">Duration</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
                                    </div>
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

export default ManageUser;