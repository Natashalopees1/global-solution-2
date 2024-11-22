"use client";
import Image from 'next/image';

import guilhermeImg from '@/image/members/guilherme.png'
import juanImg from '@/image/members/juan.png'
import natashaImg from '@/image/members/natasha.png'

export default function Cards(){
    const participants = [
        {
          name: 'Guilherme Felipe',
          rm: 'RM558282',
          imageSrc: guilhermeImg,
        },
        {
          name: 'Juan Pablo ',
          rm: 'RM557727',
          imageSrc: juanImg,
        },
        {
          name: 'Natasha Lopes',
          rm: 'RM554816',
          imageSrc: natashaImg,
        },
      ];
    return (
        <section className="text-center px-8 py-12">
        <h2 className="text-2xl font-bold text-orange-400">Participantes</h2>
        <p className="text-orange-300 mt-2 max-w-xl mx-auto">
          Empressarios da Solar Drive
        </p>
        <div className="flex justify-center gap-8 mt-8">
          {participants.map((participant) => (
            <div key={participant.rm} className="text-center">
              <Image
                src={participant.imageSrc}
                alt={participant.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p className="mt-4 font-semibold">{participant.name}</p>
              <p className="text-orange-300">{participant.rm}</p>
            </div>
          ))}
        </div>
      </section>
    );
}