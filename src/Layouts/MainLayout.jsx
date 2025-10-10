
import { useNavigation } from "react-router-dom";
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../Components/LoadingSpinner";


const MainLayout = () => {
     const navigation = useNavigation();
    return (
        <div className='flex flex-col  min-h-screen'>
            <Navbar></Navbar>
            {navigation.state === "loading" && <LoadingSpinner />}
           <div className=' flex-1'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
             <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default MainLayout;