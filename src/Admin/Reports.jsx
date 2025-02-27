import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Reports = () => {
  return (
    <main class="backgroundColorChange">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="sidebar-wrapper">
                
            </div>
            <div class="app-container">
                <div class="app-header">
                 
                </div>
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="userDashBoard.php">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Report</li>
                    </ol>
                </div>
                <div class="app-body">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="card mb-4">
                                                <div class="card-header">
                                                    <h5 class="card-title">Report</h5>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row" aria-disabled="">
                                                        <div class="col-12 alert alert-danger d-none" id="infoMessage" role="alert">
                                                        </div>
                                                        <div class="col-sm-6 col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label"></label>
                                                                <textarea class="form-control removeCorner" id="title" placeholder="Describe the condition" rows="5"></textarea>
                                                            </div>
                                                            <div class="d-flex gap-2 justify-content-center">
                                                                <button type="button" onclick="addNewReport()" class="btn btn-dark backgroundColorChange removeCorner">
                                                                    Report
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
                <div class="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default Reports