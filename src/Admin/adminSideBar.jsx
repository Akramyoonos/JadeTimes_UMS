import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminSideBar = () => {
  return (
<>    
<nav id="sidebar" className="sidebar-wrapper backgroundColorChange">

    <div className="app-brand p-4 mt-lg-0 mt-5">
        <a href="adminPanel.php">
            <img src="/src/assets/img/darkLogo.png" style={{ height: "60px",width: "auto"}} alt="Bootstrap Gallery" />
        </a>
    </div>

    <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
     
            <li className="active current-page">
                <a href="adminPanel.php">
                    <i className="bi bi-pie-chart"></i>
                    <span className="menu-text">Dashboard</span>
                </a>
            </li>

            <li className="">
                <a href="ManageUser.php">
                    <i className="bi bi-person-video2"></i>
                    <span className="menu-text">Manage Users</span>
                </a>
            </li>

            
            <li className="">
                <a href="manageAttendence.php">
                    <i className="bi bi-building-fill-gear"></i>
                    <span className="menu-text">Manage Attendance</span>
                </a>
            </li>

            <li className="">
                <a href="manageArticles.php">
                    <i className="bi bi-journal-bookmark"></i>
                    <span className="menu-text">Articles</span>
                </a>
            </li>

          
            <li className="">
                <a href="manageLeaves.php">
                    <i className="bi bi-calendar2-date"></i>
                    <span className="menu-text">Manage Leaves</span>
                </a>
            </li>

            <li className="">
                <a href="manageReports.php">
                    <i className="bi bi-flag"></i>
                    <span className="menu-text">
                        Manage Reports
                   
                        <span className="badge text-bg-secondary">0</span>
                    </span>
                </a>
            </li>

          
            <li className="">
                <a href="manageStaff.php">
                    <i className="bi bi-bar-chart-steps"></i>
                    <span className="menu-text">Permanent Staff</span>
                </a>
            </li>

         
            <li className="">
                <a href="managePositions.php">
                    <i className="bi bi-bar-chart-steps"></i>
                    <span className="menu-text">Manage Positions</span>
                </a>
            </li>

            <li>
                <hr />
            </li>

         
            <li className="">
                <a href="adminAttendence.php">
                    <i className="bi bi-building"></i>
                    <span className="menu-text">My Attendance</span>
                </a>
            </li>

            <li className="">
                <a href="adminLeaves.php">
                    <i className="bi bi-calendar2-x"></i>
                    <span className="menu-text">My Leaves</span>
                </a>
            </li>

            <li className="">
                <a href="manageFeedback.php">
                    <i className="bi bi-building"></i>
                    <span className="menu-text">Manage Feedback</span>
                </a>
            </li>

          
            <li className="">
                <a href="adminProfile.php">
                    <i className="bi bi-person-square"></i>
                    <span className="menu-text">My Profile</span>
                </a>
            </li>

        </ul>
    </div>
</nav>

    </>
  )
}

export default AdminSideBar