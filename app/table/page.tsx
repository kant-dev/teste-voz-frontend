"use client";

import { DialogCar } from '@/components/layout/Dialog/DialogCar';
import AddCarForm from '@/components/layout/Form/FormAddCar'
import DarkHeader from '@/components/layout/Header/DarkHeader';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteCar, getNewMustang } from '@/services/Cars'
import { Car } from '@/types/Car'
import { Calendar1Icon, GaugeIcon, UsersIcon, ZapIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function CarsPage() {  
  const [cars, setCars] = useState<Car[] | undefined>(undefined)
  const [newFetch, setNewFetch] = useState(false)
  const [loading, setLoading] = useState(true)  

  const [error, setError] = useState<string | null>(null);  

  const fetchData = async () => {
    setLoading(true);
    setError(null); 
    try {
      const data = await getNewMustang();
      setCars(data);
    } catch (error) {
      setError("Erro ao buscar os carros. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [newFetch]);


  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteCar(id);  
      setCars(cars?.filter(car => car.id !== id));  
    } catch (error) {
      setError("Erro ao excluir o carro. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <DarkHeader />

      <div className='container'>
        <AddCarForm />
      </div>

      <div className="mt-8  container">
        <Button onClick={() => setNewFetch(!newFetch)} className="text-xl px-12 py-6">Atualizar Lista</Button>

        <div className='p-4 w-full flex flex-col gap-4'>
          {loading ? (
            <div>Carregando...</div>  
          ) : (
            cars?.map(item => (
              <Card key={item.id} className='flex w-full'>
                <CardHeader className=' '>
                  <img src={`/images/${item.image}.jpg`} className='w-48' />
                </CardHeader>
                <CardContent className='grid grid-cols-1  w-[70%]  p-4'>
                  <CardTitle className='text-2xl mt-6'>{item.model}</CardTitle>

                  <div className='grid grid-cols-4 place-content-center -mt-16'>
                    <CardDescription className='flex gap-2 items-center'>
                      <Calendar1Icon size={30} />
                      <span className='text-xl'>{item.year}</span>
                    </CardDescription>
                    <CardDescription className='flex gap-2 items-center'>
                      <GaugeIcon size={30} />
                      <span className='text-xl'>{item.maxSpeed}</span>
                    </CardDescription>
                    <CardDescription className='flex gap-2 items-center'>
                      <ZapIcon size={30} />
                      <span className='text-xl'>{item.performance.powerRating}/10</span>
                    </CardDescription>
                    <CardDescription className='flex gap-2 items-center'>
                      <UsersIcon size={30} />
                      <span className='text-xl'>{item.performance.comfortRating}/10</span>
                    </CardDescription>
                  </div>

                </CardContent>
                <CardFooter className='flex flex-col justify-center gap-4 pt-4'>
                  <DialogCar car={item} onCarEdited={fetchData}/>
                  <Button  onClick={() => handleDelete(item.id)} className="py-6 px-12 text-xl">Excluir</Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
