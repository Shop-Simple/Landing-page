"use client";
import React, { useEffect } from "react";
import "../styles/sellpoints.css";

const SellPoints = () => {
  // useEffect(() => {
  //   // Trigger animation after component mounts
  //   const points = document.querySelectorAll(".relative");
  //   points.forEach((point, index) => {
  //     setTimeout(() => {
  //       point.classList.add("opacity-100", "translate-x-0");
  //     }, (index + 1) * 500); // Adjust the delay as needed
  //   });
  // }, []);

  return (
    <div className="flex justify-between container min-h-screen overflow-hidden w-full flex-col">
      <div className=" flex transition-opacity transition-transform duration-500 w-full ease-in-out">
        <div className="flex w-full pt-10">
          <div className="relative ">
            <img
              src="/circle-icon.svg"
              className="relative "
              alt="Circle Icon"
            />
            <div className="absolute top-0  inset-0 flex flex-col text-center items-center justify-center ">
              <h1 className="sm:text-2xl md:text-3xl text-lg  font-extrabold text-center text-violet-700">
                All-in-One Shopping
              </h1>
              <p className="sm:text-lg text-sm text-violet-700">
                Access a wide range of products from multiple sites in one
                place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex w-full  transition-opacity transition-transform duration-500 ease-in-out ">
        <div className="flex w-full  justify-end pr-[1%]">
          <div className="relative ">
            <img src="/flower-icon.svg" className="" alt="Flower Icon" />
            <div className="absolute flex flex-col inset-0 text-center items-center justify-center">
              <h1 className="sm:text-3xl text-lg font-semibold text-violet-700">
                Personalized Recommendations
              </h1>
              <p className="sm:text-lg md:text-md text-violet-700">
                Get tailored product suggestions based on your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex transition-opacity transition-transform duration-500 ease-in-out">
        <div className="flex w-full ">
          <div className="relative  ">
            <img src="/flower2-icon.svg" className="" alt="Flower 2 Icon" />
            <div className="absolute flex flex-col inset-0 text-center items-center justify-center ">
              <h1 className="sm:text-4xl  font-semibold text-violet-700">
                Best Price Guarantee
              </h1>
              <div className="flex justify-center items-center">
                <p className="sm:text-lg md:text-md w-96 text-violet-700">
                  Compare prices from various retailers to secure the best
                  deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPoints;

//  <div className="flex container max-h-screen overflow-hidden w-[100%] flex-col">
//       <div className=" flex transition-opacity transition-transform duration-500 w-full ease-in-out">
//         <div className="relative top-10 sm:left-10">
//           <img
//             src="/circle-icon.svg"
//             className="relative sm:w-96 sm:h-96 md:w-80 md:h-80 lg:w-80 lg-80  w-52 h-52"
//             alt="Circle Icon"
//           />
//           <div className="absolute top-0  inset-0 sm:w-96 lg:w-80 lg:80 flex flex-col text-center items-center justify-center ">
//             <h1 className="sm:text-3xl text-lg  font-extrabold text-center text-violet-700">
//               All-in-One Shopping
//             </h1>
//             <p className="sm:text-md text-sm text-violet-700">
//               Access a wide range of products from multiple sites in one place.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="relative left-1/3 flex  transition-opacity transition-transform duration-500 ease-in-out ">
//         <div className="relative  sm:bottom-52 sm:left-32 ">
//           <img
//             src="/flower-icon.svg"
//             className="sm:w-96 sm:h-96 md:w-80 md:h-80 lg:w-96 lg:h-96 w-52 h-52"
//             alt="Flower Icon"
//           />
//           <div className="absolute sm:w-96 inset-0 lg:w-86 lg:86 flex flex-col text-center items-center justify-center     ">
//             <h1 className="sm:text-3xl text-lg font-semibold text-violet-700">
//               Personalized Recommendations
//             </h1>
//             <p className="sm:text-md text-sm text-violet-700">
//               Get tailored product suggestions based on your preferences.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="relative  flex transition-opacity transition-transform duration-500 ease-in-out">
//         <div className="relative sm:bottom-52 sm:left-32 bottom-0 left-0">
//           <img
//             src="/flower2-icon.svg"
//             className="sm:w-96 sm:h-96 lg:w-96 lg:h-96 md:w-60 md:h-60 w-60 h-60"
//             alt="Flower 2 Icon"
//           />
//           <div className="absolute inset-0  sm:h-96 lg:w-96 lg:h-96 left-0 flex flex-col justify-center p-10 sm:p-0 text-center ">
//             <h1 className="sm:text-2xl text-lg font-semibold text-violet-700">
//               Best Price Guarantee
//             </h1>
//             <p className="sm:text-md  text-sm   text-violet-700">
//               Compare prices from various retailers to secure the best deals.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
