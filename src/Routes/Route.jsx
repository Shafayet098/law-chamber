import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import Error from './Error';
import Home from '../Components/Home/Home';
import Booking from '../Components/Booking/Booking';
import Contact from '../Components/Contact/Contact';
import Blogs from '../Components/Blogs/Blogs';
import LawerDetails from '../Components/LawerDetails/LawerDetails';
import Loading from './Loading';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            path: '/',
            loader:()=>fetch('./data.json'),
            Component: Home,
            hydrateFallbackElement: <Loading></Loading>,
        },
        {
            path:'/booking',
            loader:()=>fetch('/data.json'),
            Component: Booking,
            hydrateFallbackElement: <Loading></Loading>,
        },
        // {
        //     path:'/contact',
            
        //     Component: Contact,
        // },
        {
            path: '/blogs',
            loader:()=> fetch('/data.json'),
            Component: Blogs,
            hydrateFallbackElement: <Loading></Loading>,
        },
        {
            path:'/details/:id',
            loader:()=>fetch('/data.json'),
            Component: LawerDetails,
            hydrateFallbackElement: <Loading></Loading>,
        },
    ]
  },
]);