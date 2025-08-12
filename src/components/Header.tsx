import logo from "../assets/logo.svg";
import menuIcon from '../assets/icons/icon-hamburger.svg';

const Header = () => {
    return (
        <header className="container header ">

            <div className="w-full flex justify-between items-center py-[34px]">

                <div className="flex items-center gap-[24px]">
                    <div className="logo">
                        <div className=" cursor-pointer select-none h-auto w-full">
                            <img src={logo} alt="Shortly" />
                        </div>
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex gap-4">
                            <li className="text-grayish-violet hover:text-dark-violet font-bold">
                                <a href="#Features">Features</a>
                            </li>
                            <li className="text-grayish-violet hover:text-dark-violet font-bold">
                                <a href="#Pricing">Pricing</a>
                            </li>
                            <li className="text-grayish-violet hover:text-dark-violet font-bold">
                                <a href="#Resources">Resources</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden lg:flex items-center justify-between gap-9 w-ful">
                    <button className="w-ful rounded-full text-grayish-violet font-bold">Login</button>
                    <button className="w-ful rounded-full py-[9px] px-[24px] text-white font-bold bg-cyan">Sign Up</button>
                </div>


                {/* MOBILE NAVIGATION */}
                <div className="lg:hidden">
                    <img src={menuIcon} alt="nav-icon"
                        className='font-bold fill-grayish-violet h-[24px] w-[24px]'
                    />
                </div>
            </div>

        </header>
    )
}

export default Header