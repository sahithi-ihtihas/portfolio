import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onResumeClick={() => scrollToSection(resumeRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <section ref={homeRef}>
        <Home />
      </section>
      <section ref={resumeRef}>
        <Resume />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
