import heroImage from '../assets/images/illustration-working.svg';

const Hero = () => {
    return (
        <section className="container hero">

            <div className="flex justify-between items-center">
                <div className="hero-text-box items-center justify-between">
                    <h1 className="text-[42px] font-bold">More than just shorter links</h1>

                    <div className='bloc'>
                        <p className="text-gray font-bold">Build your brand’s recognition and get detailed insights
                            on how your links are performing.</p>

                        <button className='rounded-full py-[9px] px-[24px] text-white font-bold bg-cyan'>Get Started</button>
                    </div>
                </div>

                <div className="hero-img-box w-10/12">
                    <img src={heroImage} alt="illustration-working" />

                </div>
            </div>

        </section>
    )
}

export default Hero