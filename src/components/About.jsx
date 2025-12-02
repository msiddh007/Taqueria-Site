import React from 'react'

const about = {
  en: `We are a family with a dream that started many years ago, to have our own business and share what we love the most: cooking with love!
We started this project because we wanted to spend more time together and bring our community a taste of the flavors that represent us.

After many years of experience in the food industry, we created Taquería La Family, a place where we combine the best of Mexican and Honduran cuisine, with a homemade, authentic touch that makes you feel right at home.

More than just a food truck, we are a family serving with passion and heart. ❤️`,
  es: `¡Somos una familia con un sueño que nació hace muchos años: tener nuestro propio negocio y compartir lo que más nos gusta hacer, cocinar con amor!
Decidimos comenzar este proyecto porque queríamos pasar más tiempo juntos y ofrecer a nuestra comunidad un pedacito del sabor que nos representa.

Después de muchos años de experiencia en el ambiente de comida, creamos Taquería La Family, un lugar donde combinamos lo mejor de la comida mexicana y hondureña, con un toque casero y auténtico que te hará sentir como en casa.

Más que un food truck, somos una familia sirviendo con pasión y cariño. ❤️`
}

export default function About({ lang }) {
  return (
    <section id="about" className="section py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{lang === 'en' ? 'About Us' : 'Nosotros'}</h2>
          <article className="space-y-4 whitespace-pre-line leading-relaxed">
            {about[lang]}
          </article>
        </div>
        <img src="/images/owners.jpg" alt="Owners" className="rounded-2xl shadow-lg w-full object-cover h-[360px]" />
      </div>
    </section>
  )
}
