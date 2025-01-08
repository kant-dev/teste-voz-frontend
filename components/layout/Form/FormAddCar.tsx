"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { postCar } from "@/services/Cars";
import { useToast } from "@/hooks/use-toast";

export const formSchema = z.object({
  model: z.string().min(3, "Informe a marca do carro"), 
  year: z
    .preprocess((val) => Number(val), z.number().int().min(1900, "Informe um ano válido")),
  maxSpeed: z.string().nonempty("Informe a velocidade máxima com Km/h"),
  performance: z.object({
    powerRating: z
      .preprocess((val) => Number(val), z.number().int().min(0).max(10))
      .refine((val) => !isNaN(val), { message: "Informe um valor válido" }),
    comfortRating: z
      .preprocess((val) => Number(val), z.number().int().min(0).max(10))
      .refine((val) => !isNaN(val), { message: "Informe um valor válido" }),
  }),
  image: z.string().nonempty("Informe um nome válido para a imagem"),
});

export default function AddCarForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      year: 2023,
      maxSpeed: "",
      performance: {
        powerRating: 5,
        comfortRating: 5,
      },
      image: "mustang",
    },
  });

  const {toast} = useToast()

  const onSubmit = async  (values: z.infer<typeof formSchema>) => {
    try {
      const data = await postCar(values);
      toast({
        title: "Carro adicionado com sucesso!",
        description: `O carro ${values.model} foi adicionado à coleção`,
        duration: 1500
      })
      form.reset(); 
    } catch (error) {
      toast({
        title: "Carro adicionado com sucesso!",
        description: `O carro ${values.model} foi adicionado à coleção`,
        duration: 1500,
        variant: "destructive"
      })
      console.error("Erro ao adicionar o carro:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="shadow-md mt-8 p-2"
      >
        <h2 className="text-xl p-2 mb-4 font-bold">Adicionar Mustang à coleção</h2>
        <div className="grid grid-cols-3 gap-4 p-2">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ano</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 text-lg"
                    {...field}
                    type="number"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input className="h-12" {...field} />
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
                <FormLabel>Poder de Performance</FormLabel>
                <FormControl>
                  <Input
                    className="h-12"
                    {...field}
                    type="number"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input
                    className="h-12"
                    {...field}
                    type="number"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input
                    className="h-12"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="p-2">
          <Button className="text-xl px-16 py-8" type="submit">
            Adicionar
          </Button>
        </div>
      </form>
    </Form>
  );
}
