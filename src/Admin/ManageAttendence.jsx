import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../pages/AdminLogin.css'
import "../Admin/adminSideBar";

const ManageAttendence = () => {
  return (
    <main class="backgroundColorChange" onload="loadUserAttendance(0)">
	<div class="page-wrapper">
		<div class="main-container">
			

			<div class="app-container">
				

				<div class="app-hero-header d-flex align-items-start">
					<ol class="breadcrumb d-none d-lg-flex align-items-center">
						<li class="breadcrumb-item">
							<i class="bi bi-house text-dark"></i>
							<a href="adminPanel.php">Home</a>
						</li>
						<li class="breadcrumb-item">Manage Attendance</li>
					</ol>
				</div>

				<div class="app-body" id="cbody">
					<div class="row">
						<div class="col-12">
							<p class="d-inline-flex gap-1">
								<button type="button" class="btn btn-dark backgroundColorChange removeCorner" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<i class="bi bi-building-add"></i>
								</button>
							</p>
						</div>

						<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabindex="-1">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">Add Past Attendance</h5>
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
													<label class="colorRed ms-3 fs-6">*</label>
													<select class="form-select removeCorner" id="adduser">
														<option value="0">Select user</option>
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
													<label class="form-label">Completed Tasks</label>
													<textarea class="form-control removeCorner" id="addtask" rows="4"></textarea>
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" class="btn btn-dark backgroundColorChange" onclick="adminMarkUserAttendance()">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-4 offset-sm-4">
							<div class="row">
								<div class="col-6">
									<div class="card mb-4 bg-success">
										<div class="card-body d-flex align-items-center">
											<table class="w-100 text-center">
												<tr>
													<td>
														<span class="smallText text-white">Marked</span>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="m-0 text-white number" id="markedCount">0</h2>
													</td>
												</tr>
											</table>
										</div>
									</div>
								</div>
								<div class="col-6">
									<div class="card mb-4 backGroundRed">
										<div class="card-body d-flex align-items-center">
											<table class="w-100 text-center">
												<tr>
													<td>
														<span class="smallText text-white">Not Marked</span>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="m-0 text-white number" id="notMarkedCount">0</h2>
													</td>
												</tr>
											</table>
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
						<div class="col-lg-3 col-sm-4 col-12 text-center">
							<div class="mb-3">
								<div class="row">
									<div class="col-3 text-end">
										<label class="form-label smallText">Name -</label>
									</div>
									<div class="col-9">
										<select id="select-state" class="form-select removeCorner smallText" onchange="loadUserAttendance(1)">
											<option value="0">All users</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-4 col-12 text-center">
							<div class="mb-3">
								<div class="row">
									<div class="col-3 text-end">
										<label class="form-label smallText">Status</label>
									</div>
									<div class="col-9">
										<select id="markStatus" class="form-select removeCorner smallText" onchange="loadUserAttendance(1)">
											<option value="1" selected>All</option>
											<option value="2">Marked</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-4 col-12 text-center">
							<div class="mb-3">
								<div class="row">
									<div class="col-3 text-end">
										<label class="form-label smallText">From Date -</label>
									</div>
									<div class="col-9">
										<input type="date" id="from" class="form-control removeCorner smallText" oninput="loadUserAttendance(1)"/>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-4 col-12 text-center">
							<div class="">
								<div class="row">
									<div class="col-3 text-end">
										<label class="form-label smallText">To Date -</label>
									</div>
									<div class="col-9">
										<input type="date" id="to" class="form-control removeCorner smallText" oninput="loadUserAttendance(1)"/>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-4 col-12 text-center">
							<div class="">
								<div class="row">
									<div class="col-3 text-end">
										<label class="form-label smallText">Order By</label>
									</div>
									<div class="col-9">
										<div class="form-check">
											<input class="form-check-input" type="radio" name="btnradio" id="exampleRadios1" value="ASC" onchange="loadUserAttendance(1)"/>
											<label class="form-check-label smallText">Date ASC</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="btnradio" id="exampleRadios2" value="DESC" checked onchange="loadUserAttendance(1)"/>
											<label class="form-check-label smallText">Date DESC</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 text-center">
							<div class="mb-3">
								<div class="row">
									<div class="col-12 text-end">
										<button class="btn btn-danger removeCorner" onclick="clearSearchDataAttendance()">
											<i class="bi bi-x"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xxl-12">
						<div class="card mb-4">
							<div class="card-body">
								<div class="row">
									<div class="table-responsive">
										<table class="table align-middle table-hover m-0">
											<thead>
												<tr>
													<th>No</th>
													<th>Id</th>
													<th>Name</th>
													<th>Email</th>
													<th>Date</th>
													<th>Attendance Status</th>
												</tr>
											</thead>
											<tbody id="tableBodyUser"></tbody>
										</table>
									</div>
								</div>
								<div class="row mt-3">
									<div class="col-12 text-center">
										<div class="card mb-4">
											<div class="card-body">
												<div class="btn-group" role="group" id="pagicontainer"></div>
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

=
</main>
  )
}

export default ManageAttendence