import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import First from "/src/components/First";
import UserLogin from './pages/UserLogin';
import ForgotPassword from './components/ForgotPassword';
import AdminLogin from './pages/AdminLogin';

const App = () => {
  return ( 
    <> 
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={First} />
      <Route path="/UserLogin" Component={UserLogin}/>
      <Route path='/AdminLogin' Component={AdminLogin}/>
      <Route path="/ForgotPassword" Component={ForgotPassword}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;