"use client"

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
    { question: "Como funciona o Solar Drive?", answer: "Os painéis solares captam a luz do sol e a convertem em energia elétrica por meio de células fotovoltaicas. Essa energia é direcionada para recarregar a bateria do carro, substituindo a necessidade de carregadores externos." },
    { question: "Quais são as vantagens de usar a Solar Drive diretamente em veículos elétricos?", answer: "Entre as principais vantagens estão a redução de custos com recarga, menor dependência de infraestrutura elétrica, maior autonomia em áreas remotas e um impacto ambiental reduzido ao usar uma fonte de energia limpa e renovável." },
    { question: "É possível utilizar a energia Solar Drive em dias nublados ou à noite?", answer: "Em dias nublados, os painéis solares ainda produzem energia, mas em menor quantidade. Para uso noturno, a bateria do carro armazena a energia captada durante o dia, permitindo que o veículo funcione mesmo sem sol." },
    { question: "Essa tecnologia é adequada para todos os tipos de veículos elétricos?", answer: "Sim, mas a eficiência varia de acordo com o tamanho do veículo. Veículos maiores, como vans ou caminhões, têm mais espaço para painéis solares e podem aproveitar tao bem quanto os carros a tecnologia" },
    { question: "Quanto um carro elétrico com placas solares pode economizar com a Solar Drive?", answer: "A economia varia dependendo do carro. Por exemplo, painéis solares integrados podem gerar entre 3 a 6 kWh por dia em condições ideais, o que equivale a até 30 km de autonomia adicional diária para um carro elétrico" },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="min-h-[720px] px-6 lg:px-20 py-12">
        <h2 className="text-center text-2xl font-bold text-orange-400 mb-2">Tire suas dúvidas sobre a <span className="text-black">Solar Drive</span></h2>
        <p className="text-center text-gray-500 mb-8">
        Encontre respostas para as perguntas mais frequentes e saiba como o Solar Drive pode facilitar o cuidado com o seu veículo.
        </p>
        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleAccordion(index)}
                className="bg-orange-400 text-white rounded-lg p-4 cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="bg-gray-100 rounded-lg p-4 mt-2">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};