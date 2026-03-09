import React, { useEffect, useState } from 'react';
import BookingPerLawyer from './BookingPerLawyer';
import { removeItemFromLocalStorage } from '../LocalStorage/LocalStorage';
// import BookingPerLawyer from './BookingPerLawyer';

const BookingContainer = ({handleCancleBooking,bookings }) => {
    // const booknew = bookings;
    // const [newBooking, setNewBooking] = useState([])
    // useEffect(() => {
    //     setNewBooking([...bookings]);
    // }, [bookings]);
    // console.log(newBooking)
    // const handleCancleBooking = (id) => {
    //     removeItemFromLocalStorage(id);
    //     const updatedBookings = newBooking.filter(item => item.id !== id);
    //     setNewBooking(updatedBookings);
    //     // handleChartUpdate(newBooking)
        
    // }

    // console.log(bookings)
    return (
        <div className='mt-20'>
           
            <div>
                {
                    bookings.map((book, index) => <BookingPerLawyer key={index}
                        book={book}
                        handleCancleBooking={handleCancleBooking}></BookingPerLawyer>)
                }
            </div>
        </div>
    );
};

export default BookingContainer;