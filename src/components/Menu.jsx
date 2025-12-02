import React from 'react'

export default function Menu({ data, lang }) {
  return (
    <section id="menu" className="section py-16">
      <h2 className="text-3xl font-bold mb-8">{lang === 'en' ? 'Menu' : 'Menú'}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-xl font-semibold text-primary mb-3">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.items.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="tabular-nums">${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-6">
        {lang === 'en'
          ? 'Prices and availability may change. Ask at the window for specials.'
          : 'Precios y disponibilidad pueden cambiar. Pregunta en la ventanilla por especiales.'}
      </p>
    </section>
  )
}
