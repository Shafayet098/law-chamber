import React from 'react';
import { Link, NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import { getItemFormLocalStorage, setItemIntoLocalStorage } from '../../Components/LocalStorage/LocalStorage';
import { toast } from 'react-toastify';


const LawerDetails = () => {
    const { id } = useParams();
    const lawyers = useLoaderData();

    const int_id = Number(id);
    // console.log()

    const lawyer = lawyers.find(lawyer => lawyer.id === int_id)
    // console.log(lawyer);
    const navigate = useNavigate();

    const handleBookAppointment = (id) => {

        const obj_id = getItemFormLocalStorage();
        const bookingID = obj_id.map(eachID => parseInt(eachID))
        const eachLaw = bookingID.find(storedID => storedID == id)
        // setExisted(eachLaw)
        if (eachLaw) {
            toast.error(`Appoint already scheduled for today`);
        }
        else {
            setItemIntoLocalStorage(id);
            navigate(`/booking`)
            toast(`Appoint scheduled for ${lawyer.name} successfully`);

        }
        //React Tostify

    }
    if (lawyer) {
        return (
            <>
                <div className='mt-10 bg-slate-300 p-20 rounded-md'>
                    <h1 className='text-center font-bold text-3xl pb-4'>Lawyer’s Profile Details</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
                </div>
                <div className="card card-side bg-base-100 shadow-sm rounded-2xl p-4 border-2 border-slate-400 mt-20">
                    <figure>
                        <img className='h-[250px] w-[250px] rounded-2xl' src={lawyer.image} />
                    </figure>
                    <div className="card-body ">
                        <div className='bg-slate-200 rounded-3xl text-blue-600 w-20 text-center'>{lawyer.experience}+</div>
                        <h2 className="card-title text-2xl">{lawyer.name}</h2>
                        <div>{lawyer.expertise_sector}
                            <span className='pl-8'>Licence No: {lawyer.license_no}</span>
                        </div>
                        <div className='flex gap-4'>
                            <h1>Availability</h1>
                            <div className='text-red-400'>
                                {
                                    lawyer.availability.map((day, index) => <span className='pr-4' key={index} >{day}</span>)
                                }
                            </div>
                        </div>
                        <h1 className='text-xl'>Consultation Fee: {lawyer.consultation_fee}</h1>
                    </div>
                </div>
                <div className='my-20 border-2 border-slate-500 rounded-xl p-4'>
                    <h1 className='text-center text-3xl font-bold'>Book an Appointment</h1>
                    <div className='mt-8 flex justify-between'>
                        <h1 className='font-bold'>Availability</h1>
                        <h1 className='font-bold'>Lawyer Available Today</h1>
                    </div>
                    <div>
                        <p className='text-red-500 text-center mt-8'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                    </div>

                    <div className="card-actions flex justify-center my-4">
                        <button onClick={() => handleBookAppointment(lawyer.id)} className="btn w-full  text-xl bg-[#0EA106] rounded-2xl shadow-green-400 text-white">Book Appointment Now</button>
                    </div>

                </div>
            </>
        );
    }
    else {
        return (
            <div className='flex flex-col items-center justify-center my-12 space-y-4'>
                <h1 className='text-4xl font-bold'>No Lawyer Found</h1>
                <p>BD-2026-{id}</p>
                <Link to={'/'}>
                    <button className='btn bg-green-500 text-white font-semibold p-2 '>View All Lawyer</button>
                </Link>
            </div>
        )
    }
    // const [existed, setExisted] = useState('')

};

export default LawerDetails;