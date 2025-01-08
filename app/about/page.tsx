import DarkHeader from '@/components/layout/Header/DarkHeader'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <DarkHeader />
      <div className='container py-6'> 
        <h1 className='font-bold text-3xl'>Sobre</h1>
        <Separator className='my-4'/>
      </div>
    </div>
  )
}
