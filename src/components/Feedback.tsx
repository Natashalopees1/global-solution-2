import Image from 'next/image';
import icon1 from '@/image/home/person.png'


const feedbackItems ={
    cards : [
        {
          icon: icon1,
          feedback: 'Eu usei a plataforma e achei muito intuitiva',
          name: 'Natasha Lopes',
          description: 'Funcionou perfeitamente',
        },
        {
          icon: icon1,
          feedback: 'Deu certo realizar o auto checkup pela plataforma, obrigado pessoal!',
          name: 'Gustavo Lazzuri',
          description: 'Adorei',
        },
        {
          icon: icon1, 
          feedback: 'Simples, fácil e intuitiva. Ótimo trabalho',
          name: 'Ricardo Rodrigues',
          description: 'boa demais',
        },
        {
          icon: icon1, 
          feedback: 'Adorei o trabalho pessoal nota 10',
          name: 'Brenda Lopes',
          description: 'Gostei bastante',
        },
    ]
}

export default function Feedback(){
    return (
        <section className="w-full py-16 px-8 bg-white">
        <div className="mb-8">
          <h2 className="text-blue-900 text-3xl font-bold pl-4">Feedbacks dos usuários</h2>
          <p className="text-gray-500 mt-2 max-w-2xl pl-4">
          Veja o que nossos clientes têm a dizer sobre a experiência com o AutoCheckup. A satisfação e o conforto de poder realizar um diagnóstico de forma prática e com suporte confiável têm transformado a rotina de quem já utiliza nossa plataforma.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-8xl mx-auto px-4">
          {feedbackItems.cards.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transform transition hover:scale-105">
              <Image src={item.icon} alt="Ícone do usuário" className="w-16 h-16 mx-auto mb-6" />
              <blockquote className="text-gray-700 italic text-lg mb-4">“{item.feedback}”</blockquote>
              <h3 className="text-gray-800 font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
}