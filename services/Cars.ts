import { formSchema } from "@/components/layout/Form/FormAddCar"
import { httpClient } from "./httpClient"
import {z} from 'zod'
import { Car } from "@/types/Car"

export const getAllCars = async() => {
  const res = await httpClient.get('/mustang')
  return res.data
}

export const postCar = async (carData: z.infer<typeof formSchema>) => {
  try {
    const res = await httpClient.post("/newmustang", carData);
    return res.data; 
  } catch (error) {
    console.error("Erro ao adicionar o carro:", error);
    throw new Error("Não foi possível adicionar o carro.");
  }
};

export const getNewMustang = async () => {
  const res = await httpClient.get('/newmustang')
  return res.data; 
}

export const deleteCar = async (id: string) => {
  const res = await httpClient.delete(`/newmustang/${id}`)
  return res.data;
}

export const putEditCar = async (id: string, data: Car) => {
  const res = await httpClient.put(`/newmustang/${id}`, data);
  return res.data;
};