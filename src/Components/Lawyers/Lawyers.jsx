import React, { useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyers }) => {
    // console.log(lawyers)
    const [show, setShow] = useState(false);
    const newLawyers = show ? lawyers : lawyers.slice(0, 6);
    // console.log(newLawyers)
    return (
        <div >
            <h1 className='text-4xl font-bold text-center'>Our Best Lawyers</h1>
            <p className='w-[90%] mx-auto text-center py-6'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            {/* Lawyers Section */}
            <div className='grid grid-cols-2 justify-between gap-4'>
                {
                    newLawyers.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>)
                }
            </div>
            <div className='text-center'>
                <button onClick={() => setShow(!show)} className='btn my-6 bg-[#0EA106] text-white rounded-2xl text-xl p-6'>{!show ? 'Show All Lawyers' : 'Hide'}</button>
            </div>
        </div>
    );
};

export default Lawyers;