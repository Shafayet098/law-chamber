import React from 'react';

const BookingPerLawyer = ({book,handleCancleBooking}) => {
    const { id, name, consultation_fee, expertise_sector } = book;

    return (
        <div className=' shadow-md p-10 my-10 rounded-xl'>

            <h1 className='font-bold text-2xl'>{name}</h1>
            <div className='flex justify-between'>
                <h3>{expertise_sector}</h3>
                <h3>Appointment Fee : {consultation_fee} Taka</h3>
            </div>
            <div className='flex justify-center mt-4'>
                <button onClick={() => handleCancleBooking(id)} className="btn btn-outline btn-error  w-full rounded-3xl">Cancel Appointment</button>
            </div>
        </div>
    );
};

export default BookingPerLawyer;