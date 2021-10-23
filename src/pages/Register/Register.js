import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
    // const{user}=useAuth()
// const handleRegistration=(e)=>{
// e.preventDefault()
// }
const{handleEmail,handlePassword,handleRegistration,error,resetPassword}=useAuth()

console.log(handleEmail,handlePassword)


    return (
<div className="container register">

  
<form onSubmit={handleRegistration
         } className="w-50  mx-auto border bg-light p-5 my-5 text-primary rounded  shadow-lg">
  <div class="row mb-3 ">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input onChange={handleEmail} type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input onBlur={handlePassword} type="password" class="form-control" id="inputPassword3"/>
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
  <input className="mx-2 bg-primary text-white" type="submit" value="Register" /> 
  <button className="rounded bg-primary text-white" onClick={resetPassword} type="submit">Reset password</button>
  
   <div class="row mb-3 text-danger">{error}
   
    
     </div>
     <p>Already an accounded?<Link to="/login">Login</Link></p>
</form>



</div>

























//         <div className="text-center border  ">
//             <h2 className="my-5 text-primary">Create an an account</h2>
//           <div className="text-center p-4  ">
//           <form  onSubmit={handleRegistration
//           } className=" for w-25 mx-auto border my-3 fs-5  p-6">
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10 p-2">
//       <input onChange={handleEmail} type="email" class="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="input Password3" class="col-sm-2 col-form-label">Password</label>
//     <div  class="col-sm-10">
//       <input onBlur={handlePassword}  type="password" class="form-control" id="inputPassword3"/>
      
//     </div>
//     <input type="submit" value="Register" />
//   </div>
//   <button  onClick={resetPassword} type="submit">Reset password</button>
  
//   <div class="row mb-3 text-danger">{error}
  
//   </div>

//   <button type="submit" class="btn btn-primary">Sign in</button>
//   <p>Already an accounded?<Link to="/login">Login</Link></p>
// </form>
//           </div>
//     </div>
    );
};

export default Register;
