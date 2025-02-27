import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContributorsArticle = () => {
  return (
    <main class="backgroundColorChange">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="userDashBoard.php">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Article</li>
                    </ol>
                </div>

                <div class="app-body">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="custom-tabs-container">
                                        <ul class="nav nav-tabs" id="customTab2" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true">
                                                    <i class="bi bi-building-check text-dark"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false">
                                                    <i class="bi bi-building-add text-dark"></i>
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="oneA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-body">
                                                                <div class="card-header">
                                                                    <h5 class="card-title">My Articles</h5>
                                                                </div>
                                                                <div class="table-responsive mt-5">
                                                                    <table class="table table-bordered m-0 w-100">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>#</th>
                                                                                <th>Article Date</th>
                                                                                <th>Title</th>
                                                                                <th>Type</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="card mt-4">
                                                                    <div class="card-body">
                                                                        <div class="col-12">
                                                                            <div class="btn-toolbar" role="toolbar">
                                                                                <div class="btn-group removeCorner me-2 text-center" role="group">
                                                                                    
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

                                            <div class="tab-pane fade" id="twoA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-header">
                                                                <h5 class="card-title">Add Article</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-12 alert alert-danger d-none" id="infoMessage" role="alert"></div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Date</label>
                                                                            <input type="date" class="form-control removeCorner" id="date"/>
                                                                        </div>
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Article Type</label>
                                                                            <select id="articleType" class="form-control removeCorner">
                                                                                <option value="0">Select</option>
                                                                                <option value="1">Commercial</option>
                                                                                <option value="2">Non Commercial</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-6 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Article Title</label>
                                                                            <textarea class="form-control removeCorner" id="title" rows="5"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card-footer">
                                                                <div class="d-flex gap-2 justify-content-center">
                                                                    <button type="button" onclick="addNewArticle()" class="btn btn-dark backgroundColorChange removeCorner">
                                                                        Add Article
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

                <div class="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>


</main>
  )
}

export default ContributorsArticle