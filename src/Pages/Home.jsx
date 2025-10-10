import React from "react";
import mobileMockup from "../assets/hero.png";
import {  FaStar, FaDownload } from "react-icons/fa";
import googlePlay from "../assets/google-play_888857.png";
import appStore from "../assets/game_16566128.png";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppCard from '../Components/AppCard'
import SkeletonLoader from '../Components/SkeletonLoader'
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

        {/* Cards */}
        {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "> */}
          {/* Each card manually written */}
          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Forest: Focus For Productivity
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>4.5M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.8</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              SnPlan: ToDo List With Reminder
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>3.9M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.6</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              FLIP - Focus Timer For Study
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>4.9M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.7</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Pomocat - Cute Pomodoro Timer
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>2.1M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.9</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Time Planner: Schedule & Tasks
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>5.1M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.5</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Morning Habits - Daily Routine
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>3.4M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.6</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Focus Plant: Pomodoro Forest
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>9.0M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.8</span>
              </div>
            </div>
          </div> */}

          {/* <div className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Alarmy - Alarm Clock & Sleep
            </h3>
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <FaDownload className="text-[#00C853]" />
                <span>8.3M</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.9</span>
              </div>
            </div>
          </div> */}
        {/* </div> */}

        {/* Show All Button */}
        
        {loading ? (
        <SkeletonLoader />
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
