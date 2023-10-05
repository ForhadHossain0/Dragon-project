import { Link } from "react-router-dom";
import Navbar from '../headers section/Navbar';
import { useContext } from "react";
import { AuthContext } from "../provider/Provider";


const Register = () => {

  const { createUser } = useContext(AuthContext);
  
  const handleRegister = e =>{
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');  
    const photo = form.get('photo')  
    const email = form.get('email');
    const password = form.get('password');

     createUser (email,password,photo,name)
      .then(result => {
        console.log(result.user) 
        e.target.reset();
      } )
      .catch(error => {
        console.log(error.message)
      } )
    

 }



    return (
  <> 
  <Navbar></Navbar>     
        <div className="card  w-[530px]  rounded-none mx-auto shadow-2xl ">
        <h2 className="text-3xl font-bold mt-8 mb-3">Register your account</h2>
    <form onSubmit={handleRegister} className="card-body items-center  ">

    <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Name</span>
        </label>
        <input name="name" type="text" placeholder="enter your name"  className="input bg-[#F3F3F3]  rounded-none w-80" required />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Photo URL</span>
        </label>
        <input name="photo" type="text" placeholder="enter your phot url"  className="input bg-[#F3F3F3]  rounded-none w-80" required />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Email</span>
        </label>
        <input name="email" type="email" placeholder="enter your email address"  className="input bg-[#F3F3F3]  rounded-none w-80" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-[#403F3F] font-semibold">Password</span>
        </label>
        <input name="password" type="password" placeholder="enter your password" className="input  bg-[#F3F3F3] rounded-none w-80" required />
        <label className="label ">
          <input type="checkbox" name="checkbox" id="" /> <span className=" mr-12">accept our terms & condition</span>
        </label>
      </div>
      <div className="form-control mt-3">
        <button className="btn btn-primary  bg-[#403F3F] rounded-none w-80">Register</button>
      </div>
      <p href="" className="text-sm"> Already Have An Account ? <Link to='/login' className="text-red-500">please  Login</Link> </p>
    </form>
  </div>
</>
    );
};

export default Register;