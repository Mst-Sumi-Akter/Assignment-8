import React from "react";
import { Link} from "react-router-dom"; 
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import img from "../assets/error-404.png"

const ErrorPage = () => {
  

  return (
    <>
      <Navbar /> 
      <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-gray-800">
        <img src={img} alt="" />

        <Link
          to="/"
          className="bg-[#00D390] text-white px-6 py-2 rounded-md hover:bg-[#00b77c] transition-all"
        >
          Go Back Home
        </Link>
      </div>
      <Footer /> 
    </>
  );
};

export default ErrorPage;
