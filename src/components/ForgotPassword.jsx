import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../Login-pages/UserLogin.css'
import '../Login-pages/AdminLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ForgotPassword = () => {
  return (
 
    <main className="bg-white">
	<div className="container ">
	    
		<div className="row justify-content-center align-content-center vh-100">
			<div className="col-xl-4 col-lg-5 col-sm-12 col-12">

				<div className="border border-light p-4 mt-5 removeCorner">
					<div className="login-form">

						<div className="row">
							<div className="alert alert-danger d-none" id="infoMessage" role="alert">
							</div>
							<div className="col-12 " id="reqbox">
							    <div className="row">
							        <a href="/" className="mb-4  text-center">
									<img src="/src/assets/img/logoDark.jpg" style={ {height: "80px",width: "auto"}} className="img-fluid login-logo" alt="logo" />
								</a>
							    </div>
								
								<h6 className="fw-light mb-4 lh-2">
									In order to access your account, please enter the email id you
									provided during the registration process.
								</h6>
								<div className="mb-3">
									<div className="row">
										<div className="col-12">
											<div className="row">
												<div className="col-12">
													<label className="form-label">Your Email</label>
												</div>
												<div className="col-9 ps-4 pe-3">
<div className="row">
    <input type="text" id="forgotEmail" className="form-control removeCorner" placeholder="Enter your email" />
</div>
    	

												
												</div>
												<div className="col-3">
												    <div className="row pe-2">
												        	<button  className="btn smallText btn-lg   btn-dark backgroundColorChange removeCorner">
														Request
													</button>
												    </div>
												
												</div>
											</div>


										</div>



									</div>



								</div>

							</div>

							<div className="col-12 d-none" id="refbox">
								<div className="row">
									<div className="col-12">
										<label className="form-label">Reference code</label>
										<input type="text" id="frefcode" className="form-control removeCorner" placeholder="reference code" />

										<hr/>
									</div>
									<div className="col-12">
										<label className="form-label">New Password</label>
										<input type="text" id="fnewPassword" className="form-control removeCorner" placeholder="Enter the Password" />
									</div>
									<div className="col-12">
										<label className="form-label">Repeat the Password</label>
										<input type="text" id="frepPassword" className="form-control removeCorner" placeholder="Repeat the Password" />
									</div>
									<div className="col-12 mt-3 ">
									    
										<button className="btn w-100 smallText btn-lg  btn-dark backgroundColorChange removeCorner" >
											Recover
										</button>
									</div>
								</div>

							</div>
							<div className="col-12">
								<div className="row">

									<div className="col-6">
										<Link to="/UserLogin" className="text-decoration-underline">Go to User LogIn</Link>
									</div>
									<div className="col-6 text-end ">
										<Link to="/AdminLogin" className="text-decoration-underline">Go to Admin Login</Link>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</main>

  )
}

export default ForgotPassword