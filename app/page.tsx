import CardCars from "@/components/Cars/CardCars";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { getAllCars } from "@/services/Cars";
import { Car } from "@/types/Car";
import Image from "next/image";

export default async function Home() {

  const cars: Car[] = await getAllCars()

  return (
    <div className="h-screen w-screen relative overflow-x-hidden pb-6">
      {/* Cabeçalho */}
      <Header />

      <Image
        src="/images/mustang-sec.jpg"
        alt="Mustang"
        layout="fill"
        className="lg:object-cover object-contain  lg:mt-0 mt-[-21.9rem] rounded-bottom-image"
      />

      <CardCars cars={cars} />
      <Footer />
    </div>
  );
}

