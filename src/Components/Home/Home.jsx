import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router';
import Lawyers from '../Lawyers/Lawyers';

const Home = () => {
    const lawyers = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <div className='mt-12'>
                <Lawyers lawyers={lawyers}></Lawyers>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;