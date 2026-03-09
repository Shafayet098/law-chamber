// import { RechartsDevtools } from '@recharts/devtools';
import React, { useEffect, useState } from 'react';

import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from 'recharts';
import { getItemFormLocalStorage, removeItemFromLocalStorage } from '../LocalStorage/LocalStorage';
import { Link, useLoaderData } from 'react-router';
import BookingContainer from './BookingContainer';
import { toast } from 'react-toastify';


const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
};
const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;
    }

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}

function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0');
    return `#${hex}`;
}



const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const dataObj = useLoaderData();
    // console.log(Array.isArray(dataObj));
    // console.log(dataObj)

    useEffect(() => {
        const obj_id = getItemFormLocalStorage();
        const bookingID = obj_id.map(eachID => parseInt(eachID))

        const newObjects = dataObj.filter(obj => bookingID.includes(obj.id))
        // console.log(newObjects)
        setBookings(newObjects);

    }, [])

    const handleCancleBooking = (id) => {
        removeItemFromLocalStorage(id);
        const updatedBookings = bookings.filter(item => item.id !== id);
        setBookings(updatedBookings);
        toast.error(`Appointment is Canceled`);
        // handleChartUpdate(newBooking)
    }

    return (
        <>
            {/* <Helmet>
                <title>Booking</title>
            </Helmet> */}
            <div>
                {
                    bookings.length === 0 ?
                        <div className='flex flex-col justify-center items-center mt-16'>
                            <h1 className='font-bold text-4xl '>You have Not Booked Any Appointment Yet</h1>
                            <Link to={'/'}>
                                <button className='btn bg-green-500 text-white font-semibold mt-8'>Book an Appointment</button>
                            </Link>
                        </div>
                        :
                        <div>
                            <ResponsiveContainer width='100%' height={400}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <BarChart width={600} height={300} data={bookings} margin={margin} barSize={100} >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip cursor={{ fillOpacity: 0.5 }} />
                                    <XAxis dataKey="name" />
                                    <YAxis domain={[0, 600]} />


                                    <Bar dataKey="consultation_fee" shape={TriangleBar} activeBar>
                                        {
                                            bookings.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={getRandomHexColor()} />
                                            ))
                                        }
                                    </Bar>

                                </BarChart>
                            </ResponsiveContainer>
                            <div className='text-center mb-10'>
                                <h1 className='text-3xl font-bold'>My Today Appointments</h1>
                                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                            </div>
                        </div>
                }
            </div>

            <BookingContainer
                handleCancleBooking={handleCancleBooking} bookings={bookings}></BookingContainer>
        </>

    );
};

export default Booking;