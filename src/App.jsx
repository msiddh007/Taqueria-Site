import React, { useEffect, useState, useMemo } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [data, setData] = useState(null)
  const [lang, setLang] = useState('en')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(setData)
      .catch(e => setError('Failed to load site data.'))
  }, [])

  const t = useMemo(() => ({
    en: {
      nav: { menu: 'Menu', about: 'About', contact: 'Contact' },
      hero: {
        title: 'Authentic Mexican & Honduran Flavors on Wheels',
        cta: 'See Menu'
      },
      contact: {
        title: 'Visit Us',
        hours: 'Hours',
        phone: 'Phone',
        address: 'Address',
        follow: 'Follow Us',
        formTitle: 'Catering & Events',
        formSubtitle: 'Tell us about your event:',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Email'
      },
      footer: '© ' + new Date().getFullYear() + ' Taquería La Family. All rights reserved.'
    },
    es: {
      nav: { menu: 'Menú', about: 'Nosotros', contact: 'Contacto' },
      hero: {
        title: 'Sabores Auténticos de México y Honduras sobre Ruedas',
        cta: 'Ver Menú'
      },
      contact: {
        title: 'Visítanos',
        hours: 'Horarios',
        phone: 'Teléfono',
        address: 'Dirección',
        follow: 'Síguenos',
        formTitle: 'Catering y Eventos',
        formSubtitle: 'Cuéntanos sobre tu evento:',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar Correo'
      },
      footer: '© ' + new Date().getFullYear() + ' Taquería La Family. Todos los derechos reservados.'
    }
  }[lang]), [lang])

  if (error) return <div className="section py-12 text-red-600">{error}</div>
  if (!data) return <div className="section py-12">Loading…</div>

  return (
    <div>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Menu data={data.menu} lang={lang} />
        <About lang={lang} />
        <Contact data={data.business} t={t} />
      </main>
      <Footer text={t.footer} />
    </div>
  )
}
