"use client"

import Image from 'next/image'
import React from 'react'

import { Car } from '@/types/Car'
import { Calendar1Icon, GaugeIcon, UsersIcon, ZapIcon } from 'lucide-react'
import { Button } from '../ui/button'

type CardCarsProps = {
  cars: Car[]
}

export default function CardCars({ cars }: CardCarsProps) {

  console.log('componete CardCars: ', cars)
  return (
    <div className='relative z-10 top-56 lg:top-[56rem] flex justify-center'>
      <div className='container lg:p-0 px-4 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-32 mt-6'>
        {
          cars.map((car, index) => (
            <div key={index} className='w-2/3 border-2 border-black rounded-md  flex flex-col mt-16 items-center lg:h-[25.63rem] relative h-[22rem]'>
              <div>
                <img src={`/images/${car.image}.jpg`} alt="" className='z-10 relative -top-[6rem] w-64' />
              </div>
              <div className='grid grid-cols-1 gap-y-[1rem] w-full absolute top-20'>
                <p className='text-center text-3xl relative z-20'>
                  {car.model}
                </p>
                <p className='flex gap-8 items-center px-6'>
                  <Calendar1Icon size={30} />
                  <span className='text-2xl'>{car.year}</span>
                </p>
                <p className='flex gap-8 items-center px-6'>
                  <GaugeIcon size={30} />
                  <span className='text-2xl'>{car.maxSpeed} </span>
                </p>
                <p className='flex gap-8 items-center px-6'>
                  <ZapIcon size={30} />
                  <span className='text-2xl'>{car.performance.powerRating}/10</span>
                </p>
                <p className='flex gap-8 items-center px-6'>
                  <UsersIcon size={30} />
                  <span className='text-2xl'>{car.performance.comfortRating}/10</span>
                </p>
                <div className='p-2 text-center '>
                  <Button className='w-[90%] text-xl py-8 rounded-full' variant={'outline'}>Ver Carro</Button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
