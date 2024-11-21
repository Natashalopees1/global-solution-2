import Image from 'next/image';
import icon1 from '@/image/home/person.png'


const feedbackItems ={
    cards : [
        {
          icon: icon1,
          feedback: 'Foi incrível viajar sem tanta preocupação com postos de recarga, graças aos painéis solares.',
          name: 'Natasha Lopes',
          description: 'Funcionou perfeitamente',
        },
        {
          icon: icon1,
          feedback: 'Os painéis solares chamam atenção e mostram que o futuro já chegou!',
          name: 'Juan Pablo',
          description: 'Adorei',
        },
        {
          icon: icon1, 
          feedback: 'Senti que realmente estava contribuindo para o meio ambiente, usando energia limpa no dia a dia.',
          name: 'Ricardo Rodrigues',
          description: 'boa demais',
        },
        {
          icon: icon1, 
          feedback: 'Muito prático! O carro se recarrega enquanto está estacionado no sol, economizando tempo e energia',
          name: 'Brenda Lopes',
          description: 'Gostei bastante',
        },
    ]
}

export default function Feedback(){
    return (
        <section className="w-full py-16 px-8 bg-white">
        <div className="mb-8">
          <h2 className="text-orange-400 text-3xl font-bold pl-4">Feedbacks dos usuários</h2>
          <p className="text-gray-500 mt-2 max-w-2xl pl-4">
          Veja o que nossos clientes têm a dizer sobre a experiência com o Solar Drive. Transforme cada quilômetro em um passo rumo à sustentabilidade. Com a energia solar integrada ao seu carro elétrico, você dirige com a consciência tranquila e o planeta agradece.
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