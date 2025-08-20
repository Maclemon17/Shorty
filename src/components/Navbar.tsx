import { useState } from 'react';
import Logo from '../assets/logo.svg';
import IconOpen from '../assets/icons/icon-hamburger.svg';
import IconClose from '../assets/icons/icon-close.svg';

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);


    const toggleNav = () => {
        setOpenNav(!openNav);
    }


    return (
        <header className="bg-white px-10 py-6 lg:px-44">
            <div className="flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center gap-12">
                    <img src={Logo} alt="logo" className="select-none cursor-pointer" />

                    <nav>
                        <ul className="hidden md:flex items-center gap-6 text-[16px] font-semibold text-grayish-violet cursor-pointer transition">
                            <li className="hover:text-black"><a href="/">Features</a></li>
                            <li className="hover:text-black"><a href="/">Pricing</a></li>
                            <li className="hover:text-black"><a href="/">Resources</a></li>
                        </ul>
                    </nav>
                </div>

                {/* ACTION BUTTONS */}
                <div className="hidden md:flex items-center gap-6 text-grayish-violet text-[16px] font-semibold transition">
                    <button className="hover:text-black">Login</button>
                    <button className="px-7 py-2.5 rounded-4xl bg-cyan hover:opacity-70 text-white">Sign Up</button>
                </div>


                {/* MOBILE NAV */}
                <div className="md:hidden cursor-pointer">
                    {openNav ? (
                        <img src={IconClose} alt="close" className="w-6 h-6" onClick={toggleNav} />
                    ) : (
                        <img src={IconOpen} alt="open" className="w-8 h-6" onClick={toggleNav} />
                    )}
                </div>
            </div>

            <div className={`${openNav ? "translate-x-0" : "-translate-x-full hidden"} lg:hidden flex flex-col text-center gap-10 absolute top-20 left-10 right-10 p-10  h-fit bg-dark-blue text-xl rounded-2xl`}>
                <nav>
                    <ul className="flex flex-col items-center gap-6 text-[16px] font-semibold text-gray cursor-pointer transition">
                        <li className="hover:text-black"><a href="/">Features</a></li>
                        <li className="hover:text-black"><a href="/">Pricing</a></li>
                        <li className="hover:text-black"><a href="/">Resources</a></li>
                    </ul>
                </nav>

                <div className="flex flex-col items-center gap-6 text-grayish-violet text-[16px] font-semibold transition">
                    <button className="hover:text-black">Login</button>
                    <button className="px-7 py-2.5 w-full rounded-4xl bg-cyan hover:opacity-70 text-white">Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar