import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#two",
      start: "5% 50%",
      end: "100% 50%",
      scrub: 1,
      pin: true,
      // markers: true,
    }
  });
  tl.to("#text-hover",{
    width: "100%",
  })

    // Fade-in animation for Section3 as Section2 fades out
  

  return (
    <div id='two' className="h-[100vh] bg-zinc-900 flex items-center relative ">
      <div className="text-white text-[5rem] left-[10%] absolute opacity-20 overflow-x-hidden">
        
          Secure your workforce and <br />customers with phishing-<br />resistant MFA
        
      </div>
      <div id='text-hover' className="text-white text-[5rem] w-[0%]  left-[10%] absolute opacity-100 whitespace-nowrap overflow-hidden">
          Secure your workforce and <br />customers with phishing-<br />resistant MFA
      </div>
    </div>
  );
};

export default Section3;
