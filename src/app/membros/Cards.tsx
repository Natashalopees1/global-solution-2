import Image from 'next/image';

import ricardoImg from '@/image/members/ricardo.png'
import gustavoImg from '@/image/members/gustavo.png'
import natashaImg from '@/image/members/natasha.png'

export default function Cards(){
    const participants = [
        {
          name: 'Ricardo Rodrigues',
          rm: 'RM558295',
          imageSrc: ricardoImg,
        },
        {
          name: 'Gustavo Lazzuri',
          rm: 'RM556772',
          imageSrc: gustavoImg,
        },
        {
          name: 'Natasha Lopes',
          rm: 'RM554816',
          imageSrc: natashaImg,
        },
      ];
    return (
        <section className="text-center px-8 py-12">
        <h2 className="text-2xl font-bold text-blue-900">Participantes</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Empressarios da For Wheels
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
              <p className="text-gray-500">{participant.rm}</p>
            </div>
          ))}
        </div>
      </section>
    );
}