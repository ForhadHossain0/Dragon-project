import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa6";
import qzone1 from '../../assets/images/qZone1.png'
import qzone2 from '../../assets/images/qZone2.png'
import qzone3 from '../../assets/images/qZone3.png'
// import bg1 from '../../assets/images/bg1.png'
import '../../index.css'

const Rigthside = () => {
  


  return (

  <div className=" text-left ">
       <div className=" space-y-2">
         <h1 className="text-xl mb-10 text-success font-semibold">Login With</h1>

           <a className="btn btn-primary btn-outline border rounded-none px-10">
             <FcGoogle></FcGoogle> Login with google
           </a>

           <a className="btn text-black btn-outline rounded-none px-11">
            <FaGithub></FaGithub> Login with github
           </a>
       </div> 

      {/* find section */}
      <div className="space-y-8 mt-14 ">
        <h1 className="text-xl mb-14 ">Find Us On</h1>

        <a href="" className="flex  items-center text-lg mx-4">
          <FaFacebookF className="mr-5  bg-[#F3F3F3] text-3xl p-2 rounded-full text-blue-400"></FaFacebookF>
          <span > Facebook </span>
        </a>

        <a href="" className="flex items-center  text-lg mx-4">
          <FaTwitter  className="mr-5 bg-[#F3F3F3] text-3xl p-2 rounded-full text-blue-400"></FaTwitter>
          <span > Twitter </span>
        </a>

        <a href="" className="flex items-center text-lg mx-4">
          <FaInstagram className="mr-5 bg-[#F3F3F3] text-3xl p-2 rounded-full  text-orange-500"></FaInstagram>
          <span > Instagram </span>
        </a>
      </div>

      {/* Q-Zone section */}
      <div className="space-y-3 my-10 p-4 bg-[#F3F3F3]">
        <h2  className="text-lg mb-10 ">Q-Zone</h2>
        <img className="mx-auto" src={qzone1} alt="" />
        <img className="mx-auto" src={qzone2} alt="" />
        <img className="mx-auto" src={qzone3} alt="" />
      </div>

      {/* Create an Amazing Newspaper */}

      <div className="text-center mx-auto amazingimg ">
       <div className="py-16">
       <h2 className="text-3xl font-bold text-center mx-auto leading-[45px]  text-white">Create an Amazing Newspaper</h2>
        <p className="leading-10 p-5 text-white  mx-auto">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="btn px-8 text-white mr-3 rounded-none bg-[#D72050]">Learn More</button>
       </div>
      </div>
 
    </div>
  );
};

export default Rigthside;
