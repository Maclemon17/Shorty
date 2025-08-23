import BgDesktop from '../assets/images/bg-shorten-desktop.svg';


const ActionCall = () => {
    return (
        <section className="px-10 py-10 lg:px-44 absolute w-full h-fit left-0 -top-30" id="action-call">
            <div className={`w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-5 px-5 md:px-20 py-7 md:py-15 rounded-2xl bg-dark-blue bg-cover bg-center`} style={{ backgroundImage: `url(${BgDesktop})` }}>
                <input type="text" placeholder='Shorten a link here...'
                    className="bg-white w-full md:flex-1 py-2.5 md:py-4 px-6 rounded-md md:rounded-xl placeholder:font-medium placeholder:text-gray placeholder:text-[15px] md:placeholder:text-[18px] focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent text-grayish-violet text-[15px] md:text-[18px] font-medium"
                />
                <button className="bg-cyan px-8 py-2.5 md:py-4 rounded-md md:rounded-xl w-full md:w-fit text-white text-[15px] md:text-[18px] font-medium hover:opacity-70 transition cursor-pointer">Shorten It!</button>
            </div>
        </section>
    )
}

export default ActionCall