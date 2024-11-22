"use client";
import Image from 'next/image';
import React from 'react';


import car from '@/image/home/problems-car.png'
import timer from '@/image/home/timer.png'
import warning from '@/image/home/warning.png'
import person from '@/image/home/person.png'

const Problems = () => {
  const infos = {
    problemsItems: [
      {
        title: "Relate seu problema",
        description: "Descreva os sintomas ou falhas que você está enfrentando com o seu veículo que depende de carregamentos em casa. Nossa plataforma guiará você no processo de oferecer recomendações para resolvermos seu problema com a Solar Drive."
      },
      {
        title: "Realize a compra",
        description: "Através de uma série de perguntas e etapas guiadas com os profissionais, você pode fazer uma avaliação inicial dos principais sistemas do seu veículo. Obtenha informações detalhadas de como a Solar Drive funcionará no seu carro."
      },
      {
        title: "Orçe e realize o reparo",
        description: "Receba uma estimativa dos custos para solucionar o problema e agende o reparo de maneira prática e rápida, com opções de locais de confiança recomendados pela Solar Drive."
      }
    ],
    cards: [
      {
        image: timer,
        title: "Ganho de tempo e dinheiro",
        description: "Com a Solar Drive, você economiza tempo ao regarregar seu carro, sem precisar esperar até chegar em casa. Economize dinheiro com nossas placas solares tecnológicas."
      },
      {
        image: warning,
        title: "Prevenção de maiores problemas",
        description: "Evite custos elevados com eletricidade para recarregar seu carro elétrico. Diminuindo a necessidade de infraestrutura de estações de recarga em áreas remotas"
      },
      {
        image: person,
        title: "Praticidade e conforto",
        description: "Tenha todo o suporte necessário para cuidar do seu veículo, direto do seu dispositivo. A plataforma é intuitiva e fácil de usar, garantindo que você tenha controle total, onde quer que esteja."
      }
    ]
  };

  return (
    <>
          <section className="flex flex-col md:flex-row gap-6 p-[100px] px-[60px]">
        <div className="md:w-1/2">
          <Image
            src={car}
            alt="Imagem de problemas no carro"
            width={500}
            height={200}
            className="object-cover h-full"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 space-y-6 text-container">
          <h2 className="text-[20px] text-orange-400 mb-[30px]">
            Com a Solar drive, recarregue seu carro com o poder inesgotável do sol.
          </h2>
          <div className="container-items">
            {infos.problemsItems.map((item, index) => (
              <div key={index} className="space-y-2 mb-[30px]">
                <h3 className="text-[18px] text-orange-400">{item.title}</h3>
                <p className="text-[12px] text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ff9113] p-6">
        <div className="flex flex-wrap justify-between">
          {infos.cards.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 mb-6 text-white text-center">
              <Image
                src={item.image || '/default-image.jpg'}
                alt={item.title}
                width={100}
                height={150}
                className="object-contain mx-auto mb-4"
              />
              <h3 className="text-[20px]">{item.title}</h3>
              <p className="text-[15px]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
  </>
  );
};

export default Problems;
