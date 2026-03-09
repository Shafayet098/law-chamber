
import logo from './../../assets/logo.png'
import { NavLink } from 'react-router';


const NavBar = () => {
    // const location = useLocation();
    // useEffect(()=>{
    //     if(location.pathname==='/'){
    //         handleNavLink('home')
    //     }

    // },[location.pathname])
    const link = <>
            <NavLink className={'btn bg-transparent shadow-none border-none rounded-none p-2 hover:bg-gray-200'} to={'/'}>Home</NavLink>
            <NavLink className={'btn bg-transparent shadow-none border-none rounded-none p-2 hover:bg-gray-200'} to={'/booking'}>Booking</NavLink>
            <NavLink className={'btn bg-transparent shadow-none border-none rounded-none p-2 hover:bg-gray-200'} to={'/blogs'}>Blogs</NavLink>
            <NavLink className={'btn bg-transparent shadow-none border-none rounded-none p-2 hover:bg-gray-200'} to={'/contact'}>Contact Us</NavLink>
        </>

    return (
        <div className="navbar mt-2">
            <div className="navbar-start">
                <img className='w-10 h-10' src={logo} alt="" />
                <span className='font-bold text-3xl'>Law.BD</span>
            </div>
            <div className="navbar-center flex">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-4">
                       {
                        link
                       }
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <button className='bg-[#0EA106] btn text-white rounded-4xl'>Contact Now</button>
            </div>
        </div>
    );
};

export default NavBar;