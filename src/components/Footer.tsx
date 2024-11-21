"use client";
import Image from 'next/image'

import logo from '@/image/logo.png'

import facebookIcon from '@/image/footer/facebook.svg'
import instagramIcon from '@/image/footer/instagram.svg'
import linkedinIcon from '@/image/footer/linkedin.svg'
import youtubeIcon from '@/image/footer/youtube.svg'
import twitterIcon from '@/image/footer/twitter.svg'
import tiktokIcon from '@/image/footer/tiktok.svg'
import appleIcon from '@/image/footer/btn-apple.png'
import googleIcon from '@/image/footer/btn-google.png'

const Footer = () => {
  const footerData = {
    itemsInst: [
      { item: "A Solar Drive" },
      { item: "Política de privacidade" },
      { item: "Trabalhe conosco" },
      { item: "Parceiros" },
      { item: "Regulamentos" },
      { item: "Notícias e Imprensa" },
      { item: "Patrocínios" },
    ],
    itemsAjuda: [
      { item: "Troca e devolução" },
      { item: "Mobilidade" },
      { item: "Entregas" },
      { item: "Meus pedidos" },
      { item: "Viagem" },
      { item: "Tecnologia" },
      { item: "Negócios" },
      { item: "Sobre a Solar Drive" },
    ],
    itemsForYou: [
      { item: "Portal do Cliente" },
      { item: "Encontre um Corretor" },
    ],
    iconsSocial: [
      { src: facebookIcon, alt: "Ícone do Facebook" },
      { src: instagramIcon, alt: "Ícone do Instagram" },
      { src: linkedinIcon, alt: "Ícone do LinkedIn" },
      { src: youtubeIcon, alt: "Ícone do Youtube" },
      { src: twitterIcon, alt: "Ícone do Twitter" },
      { src: tiktokIcon, alt: "Ícone do TikTok" },
    ],
    dowload: [
      { src: appleIcon, alt: "Baixar app da Solar Drive na Apple Store" },
      { src: googleIcon, alt: "Baixar app da Solar Drive na Google Play" },
    ],
  };

  return (
    <div className="bg-orange-400 text-white py-6 min-h-[400px] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center p-6">
        
        <div className="flex flex-col">
          <ul className="font-bold">Institucional</ul>
          {footerData.itemsInst.map((itemObj, i) => (
            <li key={i} className="font-normal">{itemObj.item}</li>
          ))}
        </div>

        <div className="flex flex-col">
          <ul className="font-bold">Blog Solar Drive</ul>
          {footerData.itemsAjuda.map((itemObj, i) => (
            <li key={i} className="font-normal">{itemObj.item}</li>
          ))}
        </div>

        <div className="flex flex-col">
          <ul className="font-bold">Solar Drive e Você</ul>
          {footerData.itemsForYou.map((itemObj, i) => (
            <li key={i} className="font-normal">{itemObj.item}</li>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <Image src={logo} alt="Logo AutoCheckup" className="mb-4" />
          <p>Acompanhe a Solar Drive nas redes sociais</p>
          <div className="flex space-x-4 mt-2">
            {footerData.iconsSocial.map((itemObj) => (
              <Image key={itemObj.alt} src={itemObj.src} alt={itemObj.alt} />
            ))}
          </div>
          <div className="mt-8">
            <p>Baixe o app da Solar Drive</p>
            <div className="flex space-x-4">
              {footerData.dowload.map((itemObj) => (
                <Image key={itemObj.alt} src={itemObj.src} alt={itemObj.alt} className="cursor-pointer" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mt-6 lg:mt-0 lg:col-span-1 border-t border-white pt-4">
          <p className="mr-10">Privacidade</p>
          <p className="mr-10">Procon</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
