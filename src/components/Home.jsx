import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}