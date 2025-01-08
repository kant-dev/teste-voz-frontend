"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
  const router = useRouter()
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Button onClick={() => router.push('/')}>Voltar a tela Principal</Button>
    </div>
  )
}
