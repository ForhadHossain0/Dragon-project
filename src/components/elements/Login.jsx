import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../headers section/Navbar';
import { useContext } from "react";
import { AuthContext } from "../provider/Provider";


const Login = () => {

  const {logIn} = useContext(AuthContext);
  const  returnHome = useNavigate();
  const  location = useLocation();
  
  const handleLogin = e =>{
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password')

      logIn(email,password)
      .then( () => {
        returnHome(location?.state ?  location.state : '/');
      })
      .catch(error => console.log(error.message))
 }
 
 


  return (
 <> 

 <Navbar></Navbar>
          <div className="card  w-[500px] h-[550px] my-2 rounded-none mx-auto shadow-2xl ">
                <h2 className="text-3xl font-bold mt-16 mb-7">Login your account</h2>
            <form onSubmit={handleLogin} className="card-body items-center space-y-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-semibold">Email</span>
                </label>
                <input type="email" name="email" placeholder="enter your email address"  className="input bg-[#F3F3F3]  rounded-none w-80" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-semibold">Password</span>
                </label>
                <input name="password" type="password" placeholder="enter your password" className="input  bg-[#F3F3F3] rounded-none w-80" required />
                <label className="label ">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-primary  bg-[#403F3F] rounded-none w-80">Login</button>
              </div>
              <p  className="text-sm"> Dont’t Have An Account ? <Link to='/register' className="text-red-500">Register now</Link> </p>
            </form>
          </div>
 </>     
    );
};

export default Login;