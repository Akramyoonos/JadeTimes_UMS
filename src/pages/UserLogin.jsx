import React from 'react'
import '../css/main.css';
import '../css/boostrap.css'
import '../pages/UserLogin.css'
import ForgotPassword from '../components/ForgotPassword'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


const UserLogin = () => {
  return (
<>
<main className="setBackImg">
   
    <div className="container ">
        <div className="row">

        </div>

        <div className="row justify-content-center align-content-center vh-100">


            <div className="col-xl-4 col-lg-5 col-12 align-content-center ">

                <div className="border border-light  p-4 mt-5 bg-white removeCorner">
                    <div className="login-form">

                        <Link to="/" className="mb-4 d-flex d-block justify-content-center" >

                            <img src="/src/assets/img/logoDark.jpg" style={{height: "70px",width: "auto"}} className="img-fluid login-logo"  alt="Jade Times User"/>
                        </Link>
                        <h4 className="fw-semibold mb-4 text-center">User Login</h4>
                        <div className="alert alert-danger d-none" id="infoMessage" role="alert">
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control removeCorner" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control removeCorner" id="password" placeholder="Enter password" />
                                		<a to="#" className="input-group-text removeCorner">
									<i className="bi bi-eye"></i>
								</a>
                            
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="form-check m-0">
                                <input className="form-check-input" type="checkbox" value="" id="rememberPassword" />
                                <label className="form-check-label" htmlFor="rememberPassword">Remember</label>
                            </div>
                            <Link to="/ForgotPassword" className="text-blue text-decoration-underline">Lost password?</Link>
                        </div>
                        <div className="d-grid py-3 mt-2">
                            <button className="btn btn-lg btn-dark backgroundColorChange removeCorner" >
                                Login
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</main>    
</>

  )
}

export default UserLogin