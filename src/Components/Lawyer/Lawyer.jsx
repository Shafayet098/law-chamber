import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({ lawyer }) => {
    const {id,image,experience, name, license_no,expertise_sector}=lawyer;
    // console.log(image)
    
    return (
        <div className="card card-side bg-base-100 shadow-sm rounded-2xl p-4 border-2 border-slate-400">
            <figure>
                <img className='h-[200px] w-[150px] rounded-2xl' src={image} />
            </figure>
            <div className="card-body">
                <div className='flex gap-20 '>
                    <p className='bg-slate-200 rounded-3xl text-[#09982F] text-center'>Available</p>
                    <p className='bg-slate-200 rounded-3xl text-blue-600 text-center'>{experience}</p>
                </div>
                <h2 className="card-title text-2xl">{name}</h2>
                <p>{expertise_sector}</p>
                <p>Licence No: {license_no}</p>
                <div className="card-actions flex justify-center ">
                    <Link to={`/details/${id}`}>
                        <button  className="btn w-full  text-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;