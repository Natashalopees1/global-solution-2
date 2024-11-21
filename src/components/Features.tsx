"use client";
import Image from 'next/image'
import featuresImg from '@/image/home/features.png'

export default function Features() {
    return (
        <section className="p-10">
            <h2 className="text-orange-400 text-xl font-semibold">Funcionalidades</h2>
            <p className="text-gray-500 mt-2 mb-8">
            Explore as funcionalidades que tornam a Solar Drive uma ferramenta essencial para o cuidado com seu veículo. Desde a inovação dos carros elétricos até a eficiência das placas solares, estamos criando um sistema onde o sol não apenas ilumina o dia, mas também impulsiona a sua jornada.
            </p>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-16 bg-orange-100 flex flex-col justify-center">
                    <h3 className="text-orange-400 text-2xl font-bold mb-4">
                        Descrição da Solar Drive
                    </h3>
                    <p className="text-gray-600">
                    Movidos pela luz do sol, nossos carros elétricos estão redefinindo a forma como pensamos sobre transporte, energia e o meio ambiente. Conecte-se a um futuro mais limpo e inteligente.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <Image
                        src={featuresImg}
                        alt="Imagem de uma pessoa dirigindo"
                        layout="responsive"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}