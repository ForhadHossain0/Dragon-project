import Marquee from "react-fast-marquee";

const BreakingnewsMarquee = () => {
  return (
    <div className="flex mx-20"> 
        <button className="btn px-8 text-white mr-3 rounded-none bg-[#D72050]">Latest</button>
      <Marquee pauseOnHover={true} speed={70}>
      <span >  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as............ </span>
      <span className="mx-5">  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......... </span>
      </Marquee>
    </div>
  );
};

export default BreakingnewsMarquee;
