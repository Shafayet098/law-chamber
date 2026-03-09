import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <NavBar></NavBar>
            </div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
                <ToastContainer></ToastContainer>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;