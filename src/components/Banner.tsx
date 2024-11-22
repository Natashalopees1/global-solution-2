"use client";
import Image from 'next/image'
import banner from '@/image/home/banner.png'

export default function Banner() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center bg-gray-100 bg-white rounded-lg shadow-md overflow-hidden w-[95%] md:h-[580px] mx-auto my-8 mb-16">
        <div className="flex-1 p-8">
          <h1 className="text-5xl font-semibold ">
          Energia solar sobre rodas: <span className="text-orange-300 font-bold">o futuro é agora</span>
          </h1>
          <p className="text-gray-500 mt-4">
            O futuro do transporte sustentável começa com a energia solar.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-400 text-white font-semibold rounded-full shadow hover:bg-orange-300 transition duration-200">
            Comece agora!
          </button>
        </div>
        <div className="flex-1 w-full h-full">
          <Image
            src={banner}
            alt="Pessoa verificando o motor do carro"
            width={450}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      );
}

