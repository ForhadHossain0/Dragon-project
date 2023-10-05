import BreakingnewsMarquee from "../headers section/BreakingnewsMarquee";
import Header from "../headers section/Header";
import Navbar from "../headers section/Navbar";
import Leftside from "./Leftside";
import Rigthside from "./Rigthside";
import Middlenews from './Middlenews';


const Home = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <BreakingnewsMarquee></BreakingnewsMarquee>
            <Navbar></Navbar>
           <br />
           <div className="grid grid-cols-1 md:grid-cols-4">

             <div>
                 <Leftside></Leftside>
             </div>

             <div className="col-span-2">
                 <Middlenews></Middlenews>
             </div>  

             <div>
                 <Rigthside></Rigthside>
             </div>

           </div>
        </div>
    );
};

export default Home;