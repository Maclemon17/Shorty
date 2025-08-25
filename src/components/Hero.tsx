import heroImage from '../assets/images/illustration-working.svg';

const Hero = () => {
    return (
        <section className="px-8 py-10 lg:pl-44 lg:pr-0" id='hero'>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                <div className="hero-text-box flex-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] text-dark-blue font-extrabold">More than just <br /> shorter links</h1>

                    <p className="text-gray font-medium md:text-2xl max-w-xl mt-4 md:mt-2 mb-8">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>

                    <button className='rounded-full py-4 px-15 text-white font-bold bg-cyan hover:opacity-70 transition cursor-pointer'>Get Started</button>
                </div>

                <div className="hero-img-box flex-1">
                    <img src={heroImage} alt="illustration-working" className="-right-30" />

                </div>
            </div>

        </section>
    )
}

export default Hero