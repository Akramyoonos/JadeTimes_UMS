import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ManageArticles = () => {
  return (
    <main class="backgroundColorChange" onload="loadUserArticles(0)">
    <div class="page-wrapper">
        <div class="main-container">
           
            <div class="admin-sidebar">
                
            </div>

            <div class="app-container">
                
                <header class="admin-app-header">
                    
                </header>

                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="adminPanel.php">Home</a>
                        </li>
                        <li class="breadcrumb-item">Manage Articles</li>
                    </ol>
                </div>

                <div class="app-body" id="cbody">
                    <div class="row">
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Add a Leave</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="alert alert-danger d-none" id="attendanceinfoMessage"></div>
                                            </div>
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Name</label>
                                                    <select class="form-select removeCorner" id="adduser">
                                                        <option value="0">Select user</option>
                                                        <option value="1">John Doe</option>
                                                        <option value="2">Jane Smith</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Leave Type</label>
                                                    <select class="form-select removeCorner" id="addtype">
                                                        <option value="1">Emergency</option>
                                                        <option value="2">Normal</option>
                                                        <option value="3">Special Leave</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Date</label>
                                                    <input type="date" id="addDate" class="form-control removeCorner"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <textarea class="form-control removeCorner" id="addreason" placeholder="Reason" rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-dark backgroundColorChange" onclick="adminAddLeave()">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-sm-4 col-12">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-12"><label class="form-label fs-6">Search By :</label></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">Name -</label></div>
                                    <div class="col-9">
                                        <select class="form-select removeCorner smallText">
                                            <option value="0">All users</option>
                                            <option value="1">John Doe</option>
                                            <option value="2">Jane Smith</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">From Date -</label></div>
                                    <div class="col-9"><input type="date" class="form-control removeCorner smallText"/></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">To Date -</label></div>
                                    <div class="col-9"><input type="date" class="form-control removeCorner smallText"/></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center mt-lg-0 mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="btnradio" checked/>
                                <label class="form-check-label smallText">Date DESC</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-12">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table align-middle table-hover m-0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th class="w-25">Title</th>
                                                <th>Date</th>
                                                <th>Submit Date</th>
                                                <th>Type</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodyUser">
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 text-center">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <div class="btn-group" id="pagicontainer">
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-footer">
                    <span>© 2024 Your Company Name. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>

</main>
  )
}

export default ManageArticles