import { Button } from '@/components/ui/button'
import React from 'react'

export default function Footer() {
  return (
    <footer className='relative top-[20rem] lg:top-[70rem] mb-4 background-footer'>
      <div className='text-white py-16 text-end px-12 grid grid-cols-1 place-items-end background-text gap-y-2 lg:gap-y-6 '>
            <h2 className='text-4xl'>Mustang</h2>
            <p className='text-[12px] p-2 w-5/6 lg:w-3/6 lg:text-2xl font-light'>
              O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
            </p>
            <Button variant={'outline'} className='bg-transparent mr-4 px-6 lg:px-28 text-xl py-6'>Ver Carros</Button>
      </div>
    </footer>
  )
}
