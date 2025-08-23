// import Footer from "../components/Footer"
import ActionCall from "../components/ActionCall"
import Features from "../components/Features"
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
                {/* <ActionCall /> */}
                <Features />
            </main>

            {/* FOOTER */}
            {/* <Footer /> */}
        </>
    )
}

export default Home