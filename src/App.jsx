import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import First from "/src/components/First";
import UserLogin from './pages/UserLogin';
import ForgotPassword from './components/ForgotPassword';
import AdminLogin from './pages/AdminLogin';
import UserDashboard from './User/UserDashboard';
import Usersidebar from './User/Usersidebar';
import AdminSideBar from './Admin/adminSideBar';
import AdminPanel from './Admin/adminPanel';
import UserAttendence from './User/userAttendence';
import UserLeaves from './User/userLeaves';
import UserProfile from './User/userProfile';
import SingleLeaveVIew from './Admin/SingleLeaveVIew';
import SingleHeadLeaveVIew from './Admin/SingleHeadLeaveVIew';
import SingleHeadAttendanceVIew from './Admin/SingleHeadAttendanceVIew';
import SingleAttendanceVIew from './Admin/SingleAttendanceVIew.JSX';
import Reports from './Admin/Reports';
import ManageUser from './Admin/ManageUser';
import ManageStaff from './Admin/ManageStaff';
import ManageReports from './Admin/ManageReports';
import ManagePositions from './Admin/ManagePositions';
import ManageLeaves from './Admin/ManageLeaves';
import ManageHeadLeaves from './Admin/ManageHeadLeaves';
import ManageFeedback from './Admin/ManageFeedback';
import ManageAttendence from './Admin/ManageAttendence';
import ManageArticles from './Admin/ManageArticles';
import HeadmanageArticles from './Admin/HeadmanageArticles';
import HeadEmployeesView from './Admin/HeadEmployeesView';
import HeadAttendence from './Admin/HeadAttendence';
import FeedbackView from './Admin/FeedbackView';
import ContributorsArticle from './Admin/ContributorsArticle';
import AdminUserDetails from './Admin/AdminUserDetails';
import AdminProfile from './Admin/AdminProfile';
import AdminLeaves from './Admin/AdminLeaves';
import AdminAttendence from './Admin/AdminAttendence.JSX';
import AdminAppHeader from './Admin/AdminAppHeader';
import UserAppHeader from './User/UserAppHeader';

const App = () => {
  return ( 
      <div className='flex'>
        <AdminAppHeader/>
      </div>
  )
}

export default App;