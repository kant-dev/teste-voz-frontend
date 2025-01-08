"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { putEditCar } from "@/services/Cars";
import { Input } from "@/components/ui/input";
import { Car } from "@/types/Car";
import { useState } from "react";

type DialogCarProps = {
  car: Car; 
  onCarEdited: () => void; 

};

const formSchema = z.object({
  model: z.string().min(3, "Informe a marca do carro"),
  year: z.number().int().min(1900, "Informe um ano válido"),
  maxSpeed: z.string().nonempty("Informe a velocidade máxima com Km/h"),
  performance: z.object({
    powerRating: z.number().min(0).max(10),
    comfortRating: z.number().min(0).max(10),
  }),
  image: z.string().nonempty("Informe um nome válido para a imagem"),
});

export function DialogCar({ car , onCarEdited }: DialogCarProps) {
  const [open, setOpen] = useState(false); 


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: car.model,
      year: car.year,
      maxSpeed: car.maxSpeed,
      performance: car.performance,
      image: car.image,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const updatedCar = { ...data, id: car.id }; 
      await putEditCar(car.id, updatedCar); 
      onCarEdited(); 
      setOpen(false);

    } catch (error) {
      console.log("Erro ao salvar alterações:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-6 px-12 text-xl">Editar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Carro - {car.id}</DialogTitle>
          <DialogDescription>
            Altere as informações do carro e clique em salvar alterações quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modelo</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxSpeed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vel. Máxima</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="performance.powerRating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poder de Performace</FormLabel>
                    <FormControl>
                      <Input {...field} type="number"                 
                    onChange={(e) => field.onChange(Number(e.target.value))}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="performance.comfortRating" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conforto</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" onChange={(e) => field.onChange(Number(e.target.value))}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagem</FormLabel>
                    <FormControl>
                      <Input {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Salvar alterações</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
