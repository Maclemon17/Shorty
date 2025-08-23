// import Footer from "../components/Footer"
import Features from "../components/Features"
import GetStarted from "../components/GetStarted"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const Home = () => {
    return (
        <>
            {/* HEADER */}
            <Navbar />
            {/* MAIN */}
            <main>
                <Hero />
                <Features />
                <GetStarted />
            </main>

            {/* FOOTER */}
            {/* <Footer /> */}
        </>
    )
}

export default Home