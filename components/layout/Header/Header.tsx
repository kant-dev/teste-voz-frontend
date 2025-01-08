'use client'

import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import ToggleNavbar from './ToogleMenu';

export default function Header() {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between  px-4 lg:px-32 py-4 relative z-10'>
        <Image 
          src={'/images/logo.jpg'}
          alt=''
          className=''
          width={30}
          height={30}
        />
        <Navbar/>
        <ToggleNavbar/>
      </div>
    </div>
  );
}
