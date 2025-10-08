
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='flex flex-col  min-h-screen'>
            <Navbar></Navbar>
           <div className='max-w-screen-xl mx-auto w-full px-10 md:px-0 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;