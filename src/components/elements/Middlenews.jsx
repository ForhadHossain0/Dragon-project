import { useEffect, useState } from "react";
import {BsBookmark,BsShare,BsEyeFill} from "react-icons/bs";
import { Link } from "react-router-dom";


const Middlenews = () => {

    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch ('news.json')
        .then(res => res.json())
        .then(data => setUser(data));
    },[])



    return (

        <div className="px-14" >
            <h1 className="text-xl text-left mb-10 text-success font-semibold">Dragon News Home </h1>
             {
              user.map(user =>
                  <div key={user._id} > 
                  <div  className="my-10 text-left">
                    <div className="flex justify-between bg-[#F3F3F3] p-3">
                        <div className="flex items-center space-x-5">
                        <img className="h-[50px]  w-[50px] rounded-full" src={user.author.img} alt="" />
                        <span className=" ">
                            <p>{user.author.name}</p>
                            <p>{user.author.published_date}</p>
                        </span>
                        </div>
                        <div className="items-center mt-3">
                          <button className="mx-3 text-xl"> <BsBookmark></BsBookmark> </button>
                          <button className="text-xl"> <BsShare></BsShare></button>
                        </div>
                    </div>
                    

                    <div className="my-5">   
                      <h2 className="text-xl font-semibold leading-9 ">{user.title}</h2>
                      <img className="py-5" src={user.image_url} alt="" />
                      <p className="text-sm leading-7 text-justify">{user.details}</p>
                      <Link to='/newsdetails' > <a href="" className="text-yellow-400 font-semibold hover:text-rose-500">Read more</a> </Link>
                    </div>

                    <div className="flex space-x-4  justify-between ">
                        <p className="font-semibold ">{user.rating.number} {user.rating.badge}</p>
                        <p className="flex items-center "><BsEyeFill className="mx-3 text-xl text-slate-500"></BsEyeFill> {user.total_view}</p>
                    </div>



                  </div>
                
                </div>
          
            
        
              )
            }
        </div>
    );
};

export default Middlenews;