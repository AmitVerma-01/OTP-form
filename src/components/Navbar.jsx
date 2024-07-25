import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='z-10 rounded-md px-2 md:px-10 md:h-16 h-12 bg-[#112D4E] text-white flex w-full justify-between items-center'>
        <div>
            <a href="https://chaicode.com"><img src="image.png" alt="chai aur code" className="w-10 md:w-12" /></a>
        </div>
        <div className='flex gap-x-2 md:gap-x-10'>
            <NavLink 
                to='/otpVarificationPage'
                className={({ isActive }) => isActive ? 'text-white p-1 border-[#3F72AF] bg-[#3F72AF] rounded-lg px-2' : ' hover:text-black'}
            >
                OTP Form
            </NavLink>
            <NavLink 
                to='/DragDropCards'
                className={({ isActive }) => isActive ? 'text-white p-1 border-[#3F72AF] bg-[#3F72AF] rounded-lg px-2' : ' hover:text-black'}
            >
                DragDrop Cards
            </NavLink>
            <NavLink 
                to='/DataTable'
                className={({ isActive }) => isActive ? 'text-white p-1 border-[#3F72AF] bg-[#3F72AF] rounded-lg px-2' : ' hover:text-black'}
            >
                Data Table
            </NavLink>
        </div>
    </div>
  );
};

export default Navbar;
