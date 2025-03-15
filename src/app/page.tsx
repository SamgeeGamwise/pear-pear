"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer'
import Button from '@/components/Button'

// Home Page Component
export default function Home()  {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(window.innerWidth <= 768 ? '/tall-friends.jpg' : '/friends.jpeg');
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  if (!bgImage) {
    return <div className="w-full h-screen bg-black" />; // Prevents initial wrong image flash
  }

  return (
    <div className="relative w-full h-screen">
      <Image 
        src={bgImage} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        priority 
      />
      <div className="absolute inset-0 flex justify-center items-center">
      <Button variant="primary" size="xl" href='/register'>Start here</Button>
      </div>
      <Footer className='text-white' />
    </div>
  );
};