import React from "react";
import mobileMockup from "../assets/hero.png";
import googlePlay from "../assets/google-play_888857.png";
import appStore from "../assets/game_16566128.png";
import useApps from "../Hooks/useApps";
import { Link } from "react-router-dom";
import AppCard from '../Components/AppCard'
import LoadingSpinner from "../Components/LoadingSpinner";
const Home = () => {
  const { loading,  apps } = useApps()

  const featuredApps = apps.slice(0, 6)
  return (
    <section className="text-center pt-10 overflow-hidden w-full">
      {/* Top Section */}
      <div className="max-w-4xl  mx-auto ">
        <h1 className="text-xl sm:text-5xl font-extrabold mb-4 leading-snug">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative apps designed to make
          everyday life simpler, smarter, and more exciting. Our goal is to turn
          your ideas into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="flex items-center gap-2 bg-gray-200 text-black px-5 py-2.5 rounded hover:opacity-90 transition">
            <img src={googlePlay} alt="" className="h-5 w-5" /> Google Play
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-black px-5 py-2.5 rounded hover:bg-gray-300 transition">
            <img src={appStore} alt="" className="h-5 w-5" /> App Store
          </button>
        </div>

        {/* Mobile Image */}
        <div className="flex justify-center mt-[-20px] relative z-10">
          <img
            src={mobileMockup}
            alt="App Mockup"
            className="w-[300px] sm:w-[350px] md:w-[500px] drop-shadow-2xl rounded-[30px]"
          />
        </div>
      </div>
          
{/* Stats Section */}
<div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-20 ">
  <div className=" mx-auto px-40 text-center">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
      Trusted By Millions, Built For You
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div>
        <p className="opacity-80 text-sm sm:text-base">Total Downloads</p>
        <h3 className="text-4xl font-bold p-2">29.6M</h3>
        <p className="text-sm mt-1 opacity-90">21% More Than Last Month</p>
      </div>
      <div>
        <p className="opacity-80 text-sm sm:text-base">Total Reviews</p>
        <h3 className="text-4xl font-bold p-2">906K</h3>
        <p className="text-sm mt-1 opacity-90">48% More Than Last Month</p>
      </div>
      <div>
         <p className="opacity-80 text-sm sm:text-base">Active Apps</p>
        <h3 className="text-4xl font-bold p-2">132+</h3>
        <p className="text-sm mt-1 opacity-90">31 More Was Launched</p>
      </div>
    </div>
  </div>
</div>

      



      {/* Trending Apps Section */}
      <div className="py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Trending Apps
        </h2>
        <p className="text-gray-500 mb-12">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* Show All Button */}
        
        {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {featuredApps.map(App => (
            <AppCard key={App.id} App={App} />
          ))}
        </div>
      )}
      <div className="mt-10">
          <Link className="px-8 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md hover:opacity-90 transition" to='/Apps'>
            Show All
          </Link>
        </div>
      </div>
    </section>

    
  );
};

export default Home;
