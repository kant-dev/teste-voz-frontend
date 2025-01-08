import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function DarkNavbar() {
  return (
    <nav className='hidden lg:flex lg:w-9/12 justify-between items-center text-lg text-black '>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>Sobre</Link>
      <Link href={'/table'}>Tabela</Link>
      <Link href={'/talk-to-us'}>Fale Conosco</Link>
      <div className='flex items-center gap-12'>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>
          <UserIcon/>
        </Link> 
      </div>
    </nav>
  )
}
