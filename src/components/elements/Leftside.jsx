import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { CiCalendarDate } from "react-icons/ci";
import cardimg1 from '../../assets/images/1.png'
import cardimg2 from '../../assets/images/2.png'
import cardimg3 from '../../assets/images/3.png'

const Leftside = () => {


   const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch ('categories.json')
        .then(res => res.json())
        .then(data => setUser(data));
    },[])

    return (
        <div className="space-y-2">
            <h1 className="text-xl text-success text-left mb-10 font-semibold">All Category </h1>
            {
              user.map(user =>
                <Link  className="ml-5 p-3 w-48 font-semibold text-left block hover:bg-slate-300" key={user.id}>{user.name}</Link>
              )
            }


            {/* card section */}
            <div className="card-container space-y-6  text-left">
                <div>
                    <img src={cardimg1} alt="" />
                    <p className="text-xl py-5 w-72 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <p className=" flex space-x-2 items-center"> <span className="mr-3">sports</span> <CiCalendarDate></CiCalendarDate>  <span>{moment().format('LL')}</span> </p>
                </div>

                <div className="py-10">
                    <img src={cardimg2} alt="" />
                    <p className="text-xl py-5 w-72 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <p className=" flex space-x-2 items-center"> <span className="mr-3">sports</span> <CiCalendarDate></CiCalendarDate>  <span>{moment().format('LL')}</span> </p>
                </div>

                <div>
                    <img src={cardimg3} alt="" />
                    <p className="text-xl py-5 w-72 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <p className=" flex space-x-2 items-center"> <span className="mr-3">sports</span> <CiCalendarDate></CiCalendarDate>  <span>{moment().format('LL')}</span> </p>
                </div>

            </div>


        </div>
    );
};

export default Leftside;