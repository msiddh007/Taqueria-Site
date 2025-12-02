import React from 'react'

export default function Header({ lang, setLang, t }) {
  return (
    <header className="bg-secondary text-white sticky top-0 z-50 shadow">
      <div className="section py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Taquería La Family logo" className="w-10 h-10 rounded-full" />
          <span className="font-bold tracking-wide">Taquería La Family</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#menu" className="hover:text-primary">{t.nav.menu}</a>
          <a href="#about" className="hover:text-primary">{t.nav.about}</a>
          <a href="#contact" className="hover:text-primary">{t.nav.contact}</a>
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="ml-2 border border-primary px-3 py-1 rounded-full hover:bg-primary/10"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'Español' : 'English'}
          </button>
        </nav>
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="md:hidden border border-primary px-3 py-1 rounded-full hover:bg-primary/10"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </header>
  )
}
