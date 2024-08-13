import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer"; // Only import once
import Contact from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  );
}
