import react from 'react';
import Navbar from './components/Navbar';
import Section2 from './components/Section2';
import Home from './components/Home';
// import { gsap } from '@gsap/react';
// import { useEffect } from 'react';
// import Lenis from 'lenis';
import Section3 from './components/Section3';

const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Section2 />
      <Section3 />
      <Home />
    </>
  );
};

export default App;