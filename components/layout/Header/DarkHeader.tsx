'use client'

import React from 'react';
import Image from 'next/image';
import ToggleNavbar from './ToogleMenu';
import DarkNavbar from './DarkNavbar';

export default function DarkHeader() {
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
        <DarkNavbar/>
        <ToggleNavbar/>
      </div>
    </div>
  );
}
