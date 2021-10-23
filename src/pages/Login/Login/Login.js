import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home'
    const handleGoogle=()=>{
        signInGoogle()
            .then(result=>{
  history.push(redirect_uri);
            })
        
    }
    
    
    return (
<div>
<h4 className="text-primary text-center my-4 fs-3">Please login</h4>
<form className="w-25 mx-auto login my-5 border bg-light rounded shadow-lg p-4">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
<div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <input  type="submit" value="submit" />
  <br />
  <br />
  <button onClick={handleGoogle} className="btn-primary text-white">Google Sign in</button>
        <p className="text-white">New to Dicin Hospital<Link className="text-primary" to="/register"> Create an Account</Link></p>

</form>



</div>





    );
};

export default Login;
