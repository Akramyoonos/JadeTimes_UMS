import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Usersidebar = () => {
  return (
<> 
<nav id="sidebar" className="sidebar-wrapper backgroundColorChange">

	<div className="app-brand p-4 mt-lg-0 mt-5">
		<a href="userDashBoard.php">
			<img src="/src/assets/img/darkLogo.png" style={{ height: "60px",width: "auto"}} alt="jadetimes" />
		</a>
	</div>

	<div className="sidebarMenuScroll">
		<ul className="sidebar-menu">

			<li className="active current-page">
				<a href="userDashBoard.php">
					<i className="bi bi-pie-chart"></i>
					<span className="menu-text">Dashboard</span>
				</a>
			</li>


			<li className="">
				<a href="contributorsArticle.php">
					<i className="bi bi-journal-bookmark"></i>
					<span className="menu-text">My Article</span>
				</a>
			</li>
			<li className="">
				<a href="reports.php">
					<i className="bi bi-flag"></i>
					<span className="menu-text">Report</span>
				</a>
			</li>

			<li className="">
				<a href="userAttendence.php">
					<i className="bi bi-building"></i>
					<span className="menu-text">Calender/Attendence</span>
				</a>
			</li>
			<li className="">
				<a href="userLeaves.php">
					<i className="bi bi-calendar2-x"></i>
					<span className="menu-text">Leave Request</span>
				</a>
			</li>

			<li className="">
				<a href="userProfile.php">
					<i className="bi bi-person-square"></i>
					<span className="menu-text">My Profile</span>
				</a>
			</li>

	
			<li>
				<hr/>
			</li>
			
			<li className="">
				<a href="HeadEmployeesView.php">
					<i className="bi bi-building"></i>
					<span className="menu-text">Department Employees</span>
				</a>
			</li>
			<li className="">
				<a href="headmanageArticles.php">
					<i className="bi bi-journal-bookmark"></i>
					<span className="menu-text">Articles</span>
				</a>
			</li>
			<li className="">
				<a href="headAttendence.php">
					<i className="bi bi-building"></i>
					<span className="menu-text">Department Attendence</span>
				</a>
			</li>
			<li className="">
				<a href="manageHeadLeaves.php">
					<i className="bi bi-building"></i>
					<span className="menu-text">Department Leaves</span>
				</a>
			</li>
		</ul>
	</div>

</nav>

</>
  )
}

export default Usersidebar