import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col ">
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12 ">
        
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase ">
            mega sale <span className="text-rose-600 ">Special</span> Offer up
            to <span className="text-orange-500 ">60%</span> off
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium nostrum, at voluptatem ducimus magnam saepe aut repellendus, laboriosam fuga sed. Provident recusandae veritatis necessitatibus, ut numquam nesciunt dicta eligendi.
          </p>
        </div>


      </div>
    </div>
  );
};

export default Hero;
