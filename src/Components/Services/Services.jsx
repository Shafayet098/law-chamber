import React from 'react';
import doctor from '../../assets/success-doctor.png'
import CountUp from 'react-countup';
import review from '../../assets/success-doctor.png'
import patients from '../../assets/success-patients.png'
import staff from '../../assets/success-staffs.png'

const Services = () => {
    return (
        <div className='my-20 '>
            <h1 className='text-5xl font-bold text-center '>We Provide Best Law Services</h1>
            <p className='text-center mt-4'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            <div className='flex justify-around gap-8 mt-8'>
                <div className='bg-slate-200 rounded-xl border-2 border-slate-400 py-6 w-[20%] px-4 text-start'>
                    <img src={doctor} alt="" />
                    <h1 className='font-bold text-2xl my-4 flex'><CountUp start={0} end={199} enableScrollSpy
                        scrollSpyDelay={200}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>+</h1>
                    <p>Total Lawyers</p>
                </div>
               
                <div className='bg-slate-200 rounded-xl border-2 border-slate-400 py-6 w-[20%] px-4 text-start'>
                    <img src={review} alt="" />
                    <h1 className='font-bold text-2xl my-4 flex'><CountUp start={0} end={1900} enableScrollSpy
                        scrollSpyDelay={200}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>+</h1>
                    <p>Total Reviews</p>
                </div>
               
                <div className='bg-slate-200 rounded-xl border-2 border-slate-400 py-6 w-[20%] px-4 text-start'>
                    <img src={patients} alt="" />
                    <h1 className='font-bold text-2xl my-4 flex'><CountUp start={0} end={1000} enableScrollSpy
                        scrollSpyDelay={200}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>+</h1>
                    <p>Cases Initiated</p>
                </div>
               
                <div className='bg-slate-200 rounded-xl border-2 border-slate-400 py-6 w-[20%] px-4 text-start'>
                    <img src={staff} alt="" />
                    <h1 className='font-bold text-2xl my-4 flex'><CountUp start={0} end={300} enableScrollSpy
                        scrollSpyDelay={200}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>+</h1>
                    <p>Total Stuffs</p>
                </div>
               

            </div>
        </div>
    );
};

export default Services;