import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, UserIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { isAuthenticated } from '@/hooks/useAuth'
import Image from 'next/image'

export default function ToggleNavbar() {

  const isAuth = isAuthenticated;

  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger >
          <MenuIcon size={40} className='text-white'/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='text-start text-xl'>
              <Image 
                src={'/images/logo.jpg'}
                alt=''
                className='w-30'
                width={30}
                height={30}
              />
            </SheetTitle>
          </SheetHeader>
          <div className='mt-4'>
            <ul className='flex flex-col gap-2 gap-y-6'>
              <Link href={'/'} className='text-xl'>Inicio</Link>
              <Link href={'/'} className='text-xl'>Sobre</Link>
              <Link href={'/table'} className='text-xl'>Tabela</Link>
              <Link href={'/'} className='text-xl'>Fale Conosco</Link>

              {
                isAuth ? (
                  <SheetFooter>
                    <Link href={''}><Button className='w-full text-white'>Sair</Button></Link>
                  </SheetFooter>
                ) : (
                  <>
                    <Link href={'/'}  className='text-xl'>Login</Link>
                    <Link href={'/'}  className='text-xl'><UserIcon/></Link>
                  </>
                )
              }
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}