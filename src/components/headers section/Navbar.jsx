import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/Provider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
     logOut()
      .then()
      .catch()
  } 

const links = <>
        <NavLink to={'/'} ><li className='mx-2  hover:bg-black'><a className="hover:text-white">Home</a></li></NavLink>
        <NavLink to={'/'} ><li className='mx-2  hover:bg-black'><a className="hover:text-white">About</a></li></NavLink>
        <NavLink to={'/'} ><li className='mx-2  hover:bg-black'><a className="hover:text-white">Career</a></li></NavLink>
</>

    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul tabIndex={0} className="menu menu-sm  text-lg font-semibold dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
      {links}
      </ul>
    </div>

    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-lg font-semibold">
    {links}
    </ul>
  </div>

  <div className="navbar-end">
   
   {
    user ?  <>  <img className="w-16 h-16 rounded-full mx-4" src={user && 'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg'} alt="" />
                <button onClick={handleLogOut} className="btn mx-5 text-white  h-5 w-28 rounded-none">Sing out</button> 
            </>

         : <Link to='/login'>  <button className="btn  text-white  h-5 w-28 rounded-none">Login</button>  </Link>
   }

  </div>

</div>
    );
};

export default Navbar;