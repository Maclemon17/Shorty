import FooterLogo from '../assets/logo.svg?react';
import Facebook from '../assets/icons/icon-facebook.svg?react';
import Twitter from '../assets/icons/icon-twitter.svg?react';
import Pintrest from '../assets/icons/icon-pinterest.svg?react';
import Instagram from '../assets/icons/icon-instagram.svg?react';

const Footer = () => {
    return (
        <footer className="px-8 py-24 lg:px-44 bg-very-dark-violet text-white text-center sm:text-left bg-dark-blue" id='footer'>
            <div className="max-w-7x mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* LOGO */}
                <div>
                    <FooterLogo color='white' className='mx-auto sm:mx-auto cursor-pointer' />
                </div>

                <div>
                    <h3 className="font-medium mb-4">Features</h3>
                    <ul className="space-y-2 text-[15px] font-medium text-grayish-violet">
                        <li className="hover:text-cyan transition"><a href="#features">Link Shortening</a></li>
                        <li className="hover:text-cyan transition"><a href="#features">Branded Links</a></li>
                        <li className="hover:text-cyan transition"><a href="#features">Analytics</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-medium mb-4">Resources</h3>
                    <ul className="space-y-2 text-[15px] font-medium text-grayish-violet">
                        <li className="hover:text-cyan transition"><a href="#blog">Blog</a></li>
                        <li className="hover:text-cyan transition"><a href="#developers">Developers</a></li>
                        <li className="hover:text-cyan transition"><a href="#support">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-medium mb-4">Company</h3>
                    <ul className="space-y-2 text-[15px] font-medium text-grayish-violet">
                        <li className="hover:text-cyan transition"><a href="#about">About</a></li>
                        <li className="hover:text-cyan transition"><a href="#our-team">Our Team</a></li>
                        <li className="hover:text-cyan transition"><a href="#careers">Careers</a></li>
                        <li className="hover:text-cyan transition"><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center md:justify-between gap-4 md:gap-0">
                    <Facebook color="#FFF" className="hover:text-cyan transition" />
                    <Twitter color="#FFF" className="hover:text-cyan transition" />
                    <Pintrest color="#FFF" className="hover:text-cyan transition" />
                    <Instagram color="#FFF" className="hover:text-cyan transition" />
                </div>
            </div>
        </footer>
    )
}

export default Footer