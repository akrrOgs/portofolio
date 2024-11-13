import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experince from "./sections/Experince";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experince />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
