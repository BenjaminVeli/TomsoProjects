import dotenv from 'dotenv';

// ---------- Componentes ----------

import Header from "./components/Header";
import Footer from "./components/Footer";

// ---------- Sections ----------

import Hero from "./sections/Hero";
import Specialty from "./sections/Specialty";
import Outstanding from "./sections/Outstanding";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {

  return (
    <>
      <Header />
      <Hero />

      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Specialty />
        <Outstanding />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
