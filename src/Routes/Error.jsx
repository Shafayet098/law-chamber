import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <NavBar></NavBar>
                <div className='container mx-auto flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-semibold'>Page Not Found</h1>
                    <div>
                        <img src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" alt="" />
                    </div>
                    <div>
                        <Link to={'/'}>
                            <button className='btn bg-green-500 text-white font-bold px-4 '>Go Back</button>
                        </Link>
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default Error;