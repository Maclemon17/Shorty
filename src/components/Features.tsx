
// import ReactComponent as Facebook from '../assets/icons/icon-facebook.svg';
import BrandComp from '../assets/icons/icon-brand-recognition.svg';
import Records from '../assets/icons/icon-detailed-records.svg';
import Customize from '../assets/icons/icon-fully-customizable.svg';
import ActionCall from './ActionCall';

const appFeatures = [
    {
        icon: BrandComp,
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content."
    },
    {
        icon: Records,
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        icon: Customize,
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },

]

const cardDividerStyles = 'after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-12 after:w-24 after:h-2 after:bg-cyan-400 after:hidden lg:after:block before:content-[""] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-25 before:w-2 before:h-30 before:bg-cyan-400 before:block lg:before:hidden';

const Features = () => {
    return (
        <section className="px-10 py-10 lg:px-44 bg-gray-200 relative mt-40" id="features">

            <ActionCall />

            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mt-40 mb-4">Advanced Statistics</h2>
            <p className="text-center text-gray text-[16px] md:text-xl font-medium max-w-xl mx-auto mb-25">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 md:gap-12 mt-15 mb-10 md:mb-20">
                {
                    appFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative ${index < appFeatures.length - 1 ? cardDividerStyles : ''}  ${index === 1 ? 'lg:mt-10' : index === 2 ? 'lg:mt-20' : ''}`}
                        >
                            <div className="bg-white px-6 py-10 md:p-10 rounded-md text-center md:text-left relative shadow-md hover:shadow-lg cursor-pointer transition z-10">
                                <div className="p-6 rounded-full bg-dark-blue h-24 w-24 flex items-center justify-center mx-auto absolute -top-12 left-1/2 md:left-10 -translate-x-1/2 md:-translate-x-0">
                                    <img src={feature.icon} alt="icon" className='size-auto object-center' />
                                </div>
                                <h3 className="text-2xl text-dark-blue font-bold mb-2 mt-10">{feature.title}</h3>
                                <p className="text-[15px] md:text-[16px] text-gray font-medium">{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features