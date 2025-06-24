'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = gsap.utils.toArray<HTMLSpanElement>('.letter');

    gsap.fromTo(
      letters,
      { y: 0 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
        },
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div className="fixed h-full w-full flex justify-center items-center bg-black text-white z-[70] top-0">
      <div ref={textRef} className="text-4xl font-bold flex space-x-1">
        {'CardStack'.split('').map((char, idx) => (
          <span key={idx} className="letter inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
