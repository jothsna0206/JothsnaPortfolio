import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white/30">
      <ScrollyCanvas />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </main>
  );
}
