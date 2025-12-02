import React from 'react'

export default function Hero({ t }) {
  return (
    <section className="relative">
      {/* Hero background image — shifted upward slightly */}
      <img
        src="/images/truck.jpg"
        alt="Food truck"
        className="w-full h-[52vh] object-cover object-[center_-80px]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero text content */}
      <div className="absolute inset-0 section flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          {/* Removed small logo here */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            {t.hero.title}
          </h1>

          <a
            href="#menu"
            className="inline-block mt-6 bg-primary text-secondary font-semibold px-5 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
