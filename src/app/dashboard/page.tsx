"use client"
import Image from 'next/image';

import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { parseCookies } from "nookies";
import { api } from "@/services/api";

//Images
import card1 from '@/image/dashboard/boneco1.png'
import card2 from '@/image/dashboard/boneco2.png'
import card3 from '@/image/dashboard/key.png'

const cards = [
    {
        title: "Fazer diagnóstico",
        description: "Resolva seu problema conosco.",
        imgSrc: card1,
        link: '/chatbot'
    },
    {
        title: "Consultar diagnósticos",
        description: "Reveja seus problemas conosco.",
        imgSrc: card2,
        link: '/chatbot'
    },
    {
        title: "Meus Veículos",
        description: "Acesse seus carros.",
        imgSrc: card3,
        link: '/gerenciamento-veiculos'
    }
];

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const { 'challenge.token': token } = parseCookies();

        if (!token) {
            router.push('/');
        } else {
            api.get('/dashboard');
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-900">Olá {user?.name}, bem vindo(a) de volta!</h1>
                    <p className="text-gray-500 mt-2">
                        Seja parte da nossa empresa e resolva seus problemas do seu celular
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {cards.map((card, index) => (
                        <Link href={card.link}>
                            <div
                                key={index}
                                className="p-6 bg-white border rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow"
                            >
                                <Image src={card.imgSrc} alt={card.title} width={200} height={200} className="w-45 h-45 mb-4" quality={100}/>
                                <h2 className="text-lg font-semibold text-blue-900 mb-2 text-center">{card.title}</h2>
                                <p className="text-gray-500 text-center">{card.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-8 bg-blue-800 text-white p-6 rounded-lg flex items-center">
                <div className="flex-1">
                    <h2 className="text-xl font-bold">Seja um assegurado Porto</h2>
                    <p className="text-white mt-2">
                        Seja um assegurador e garanta qualidade e agilidade no seu dia a dia.
                    </p>
                </div>
                <button className="bg-white text-blue-800 px-4 py-2 font-bold rounded-lg ml-4">
                    Ver detalhes
                </button>
            </div>
        </div >
    );
}
