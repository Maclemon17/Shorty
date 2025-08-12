import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"


const Home = () => {
    return (
        <>
            {/* HEADER */}
            <Header />
            {/* MAIN */}
            <main>
                <Hero />
            </main>

            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default Home