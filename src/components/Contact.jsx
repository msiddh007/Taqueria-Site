import React from 'react'

export default function Contact({ data, t }) {
  const addressQuery = encodeURIComponent(data.address)
  const mapSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`

  return (
    <section id="contact" className="section py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm text-gray-500">{t.contact.address}</dt>
              <dd className="font-medium">{data.address}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">{t.contact.phone}</dt>
              <dd className="font-medium">
                <a className="hover:text-primary" href={`tel:${data.phone}`}>{data.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">{t.contact.hours}</dt>
              <dd className="font-medium">{data.hours}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">{t.contact.follow}</dt>
              <dd className="font-medium space-x-4">
                {data.facebook && (
                  <a href={data.facebook} className="hover:text-primary" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                )}
                {data.instagram && (
                  <a href={data.instagram} className="hover:text-primary" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                )}
              </dd>
            </div>
          </dl>
        </div>

        <iframe
          title="map"
          src={mapSrc}
          className="w-full h-96 rounded-2xl shadow"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
